# Toro

Toro is a paper-trading app. You practice investing with $10,000 of virtual cash on a simulated market of fictional companies. No real money, no real market data, no sign-up.

Open `index.html` in a browser to run it. It is a single file with no build step.

## What's in the app

**Markets**
- Live simulated prices that tick every 2 seconds, with sparklines and up/down flashes
- Toro Total Market index (TXM) chart and today's top movers
- Filters for watchlist, owned stocks and sectors, plus search
- Tap the status pill to pause or resume the market

**Stock page**
- Price chart for 1D, 1W, 1M, 3M and 1Y, with a crosshair on hover or touch
- Buy and sell by dollars (fractional shares) or by share count
- Market and limit orders. Limit orders fill automatically when the price reaches your limit
- Price alerts ("notify me when LUMQ is above $330")
- Key stats: open, day range, 52-week range, volume, P/E, dividend yield
- Watchlist star and a copyable link to the stock

**Portfolio**
- Account value, today's change, total return and cash
- Allocation by sector and a 0–100 diversification score with plain-language advice
- Holdings with average cost and return, open orders, alerts and trade history
- Reset to a fresh $10,000 account (with an inline confirmation)

**Tools**
- "What if I'd invested monthly?" dollar-cost averaging backtest on the past 12 months of prices
- Compound growth planner (starting amount, monthly contribution, yearly return, years)

**Learn**
- Question of the day with a count of answered questions
- Short lessons on order types, diversification, DCA, P/E, volatility and dividends

Your account, watchlist, alerts and quiz answers are saved in your browser's local storage.

## Deep links and universal links

The app routes on both the URL hash and a `/stock/` path:

| Link | Opens |
| --- | --- |
| `/#LUMQ` or `/stock/LUMQ` | The Lumiq Semiconductors stock page |
| `/#portfolio`, `/#tools`, `/#learn` | That section |

`.well-known/` holds the files iOS and Android check to open those links in a native app:

- `.well-known/apple-app-site-association` (iOS universal links)
- `.well-known/assetlinks.json` (Android App Links)

Before shipping, replace the placeholders:

1. In `apple-app-site-association`, replace `TEAMID.com.example.toro` with your Apple Team ID and bundle ID, for example `AB12CD34EF.com.yourco.toro`.
2. In `assetlinks.json`, set `package_name` and paste your release signing certificate's SHA-256 fingerprint. Get it with `keytool -list -v -keystore <your.keystore>`, or copy it from Play Console under App integrity.
3. Serve both files over HTTPS at `https://<your-domain>/.well-known/...` with no redirects. Serve the Apple file as `application/json`, even though it has no `.json` extension.
4. In the iOS app, add the Associated Domains capability with `applinks:<your-domain>`.
5. In the Android app, add an intent filter with `android:autoVerify="true"` for `https://<your-domain>/stock/*`.

Hosts that skip dotfolders by default (GitHub Pages, for example) need a `.nojekyll` file or an explicit include for `.well-known`.

See [IDEAS.md](IDEAS.md) for the roadmap.

---

Toro is for learning. Companies are fictional, prices are simulated, and nothing here is investment advice.
