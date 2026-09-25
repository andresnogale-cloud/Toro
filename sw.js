/* Toro service worker: the app works offline after the first visit.
   App files: network first (so updates arrive), falling back to the cache.
   Fonts: cache first. Bump VERSION to force a fresh cache. */
const VERSION = 'toro-v3';
const SHELL = ['/', '/index.html', '/courses.js', '/config.js', '/manifest.webmanifest',
  '/assets/toro-full.png', '/assets/toro-emb.png', '/assets/toro-word.png',
  '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png', '/icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSION).then(async c => (await c.match(req)) || fetch(req).then(r => { c.put(req, r.clone()); return r; })));
    return;
  }
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/')) return;   // market data: always live, the app keeps its own last-prices copy
  // App routes like /learn/supply or /stock/LUMQ all serve the same page
  const isPage = req.mode === 'navigate';
  e.respondWith(
    fetch(req).then(r => { if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(isPage ? '/index.html' : req, copy)); } return r; })
      .catch(async () => (await caches.match(isPage ? '/index.html' : req)) || (isPage ? caches.match('/') : Response.error()))
  );
});
