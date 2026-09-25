// GET /api/bars?symbols=AAPL,MSFT&timeframe=5Min|1Day&days=5
// Price history as compact arrays: t (ISO time), o, h, l, c, v.
const { DATA, headers, get, send, symbolsFrom } = require('./_alpaca');
const FRAMES = { '5Min': { maxDays: 7, cache: 'public, s-maxage=60, stale-while-revalidate=120' },
                 '1Day': { maxDays: 400, cache: 'public, s-maxage=3600, stale-while-revalidate=7200' } };

module.exports = async (req, res) => {
  const h = headers();
  if (!h) return send(res, 503, { error: 'Market data is not configured. Set ALPACA_KEY_ID and ALPACA_SECRET_KEY.' });
  const symbols = symbolsFrom(req);
  const tf = String((req.query && req.query.timeframe) || '');
  if (!symbols || !FRAMES[tf]) return send(res, 400, { error: 'Pass ?symbols=AAPL,MSFT&timeframe=5Min or 1Day' });
  const days = Math.min(FRAMES[tf].maxDays, Math.max(1, parseInt((req.query && req.query.days) || '5', 10) || 5));
  const start = new Date(Date.now() - days * 864e5).toISOString();
  try {
    const bars = {};
    let token = '', pages = 0;
    do {
      const url = `${DATA}/v2/stocks/bars?symbols=${symbols}&timeframe=${tf}&start=${encodeURIComponent(start)}&feed=iex&adjustment=all&limit=10000${token ? `&page_token=${encodeURIComponent(token)}` : ''}`;
      const j = await get(url, h);
      for (const [sym, list] of Object.entries(j.bars || {})) {
        const b = bars[sym] || (bars[sym] = { t: [], o: [], h: [], l: [], c: [], v: [] });
        for (const x of list) { b.t.push(x.t); b.o.push(x.o); b.h.push(x.h); b.l.push(x.l); b.c.push(x.c); b.v.push(x.v); }
      }
      token = j.next_page_token || '';
    } while (token && ++pages < 10);
    send(res, 200, { source: 'IEX via Alpaca', timeframe: tf, bars }, FRAMES[tf].cache);
  } catch (e) {
    send(res, 502, { error: 'Could not reach the market data provider.' });
  }
};
