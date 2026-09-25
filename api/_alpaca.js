// Shared helpers for Toro's market-data functions (Vercel Node runtime).
// Keys come from Vercel environment variables and never reach the browser.
const DATA = 'https://data.alpaca.markets';
const TRADING = 'https://paper-api.alpaca.markets';
const SYMBOLS_RE = /^[A-Z][A-Z.]{0,5}(,[A-Z][A-Z.]{0,5}){0,29}$/;

function headers() {
  const id = process.env.ALPACA_KEY_ID, secret = process.env.ALPACA_SECRET_KEY;
  if (!id || !secret) return null;
  return { 'APCA-API-KEY-ID': id, 'APCA-API-SECRET-KEY': secret, accept: 'application/json' };
}

async function get(url, h) {
  const r = await fetch(url, { headers: h });
  if (!r.ok) { const e = new Error(`Alpaca ${r.status}`); e.status = r.status; throw e; }
  return r.json();
}

function send(res, status, body, cache) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');   // the phone apps call from their own origin
  if (cache) res.setHeader('Cache-Control', cache);
  res.status(status).send(JSON.stringify(body));
}

function symbolsFrom(req) {
  const s = String((req.query && req.query.symbols) || '').toUpperCase();
  return SYMBOLS_RE.test(s) ? s : null;
}

module.exports = { DATA, TRADING, headers, get, send, symbolsFrom };
