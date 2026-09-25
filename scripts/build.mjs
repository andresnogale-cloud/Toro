// Copies the web app into www/, which Capacitor packages into the iOS and Android apps.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const f of ['index.html', 'courses.js', 'manifest.webmanifest', 'sw.js']) cpSync(f, `${out}/${f}`);
for (const d of ['assets', 'icons']) cpSync(d, `${out}/${d}`, { recursive: true });
console.log('Built www/');
