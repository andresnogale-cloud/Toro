// GET /api/quotes?symbols=AAPL,MSFT
// Latest price, previous close and today's range for each symbol, plus whether the US market is open.
const { DATA, TRADING, headers, get, send, symbolsFrom } = require('./_alpaca');

module.exports = async (req, res) => {
  const h = headers();
  if (!h) return send(res, 503, { error: 'Market data is not configured. Set ALPACA_KEY_ID and ALPACA_SECRET_KEY.' });
  const symbols = symbolsFrom(req);
  if (!symbols) return send(res, 400, { error: 'Pass up to 30 tickers, for example ?symbols=AAPL,MSFT' });
  try {
    const [snap, clock] = await Promise.all([
      get(`${DATA}/v2/stocks/snapshots?symbols=${symbols}&feed=iex`, h),
      get(`${TRADING}/v2/clock`, h).catch(() => null),
    ]);
    const quotes = {};
    for (const [sym, s] of Object.entries(snap || {})) {
      if (!s) continue;
      const day = s.dailyBar || {}, prev = s.prevDailyBar || {}, trade = s.latestTrade || {};
      const price = trade.p || day.c || prev.c;
      if (!price) continue;
      quotes[sym] = { price, prev: prev.c || day.o || price, open: day.o || price, high: day.h || price, low: day.l || price,
                      volume: day.v || 0, time: trade.t || day.t || null };
    }
    const market = clock ? { open: !!clock.is_open, nextOpen: clock.next_open, nextClose: clock.next_close } : null;
    send(res, 200, { source: 'IEX via Alpaca', market, quotes }, 'public, s-maxage=10, stale-while-revalidate=30');
  } catch (e) {
    send(res, 502, { error: 'Could not reach the market data provider.' });
  }
};
