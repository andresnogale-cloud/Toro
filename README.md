# Toro

Toro teaches money and business in bite-size lessons, then lets you practice with $10,000 of virtual cash on a simulated stock market.

Open `index.html` in a browser to run it. There is no build step. Lesson content lives in `courses.js`.

## Courses

| Course | Unit 1 | Unit 2 |
| --- | --- | --- |
| Stocks & Investing | Owning a piece of a company | Building a portfolio |
| Trading | Placing orders | Charts and risk |
| Personal Finance | Budgeting basics | Credit and debt |
| Marketing & Business | Marketing basics | Business by the numbers |
| Global Supply Chains | How goods get to you | Risk and strategy |

Each unit has 3 lessons and a unit review. Each lesson opens with a short tip, then asks 5 questions. That's 150 questions across 30 lessons.

## How learning works

- **Path.** Lessons unlock one at a time along a winding path. Each unit has a Guidebook with the key ideas.
- **Question types.** Multiple choice, true or false, fill in the blank, match the pairs, and put in order. Keyboard shortcuts: 1–9 to pick an answer, Enter to check or continue, Esc to quit.
- **Mistakes.** A missed question comes back at the end of the lesson and costs one heart.
- **XP.** A lesson pays 10 XP, a unit review 20 XP, plus 5 more for no mistakes. Replaying a finished lesson pays 5 XP.
- **Streak.** Finish at least one lesson a day to keep it. A streak freeze covers one missed day.
- **Hearts.** You have 5. One comes back every 20 minutes, or you can refill all 5 for 30 gems.
- **Gems.** Earned from lessons and quests. Spend them on heart refills and streak freezes.
- **Daily goal and quests.** Pick 10, 20, 30 or 50 XP a day. Each day has three quests: reach your goal, finish 2 lessons, and make a practice trade.
- **League.** A weekly table against simulated players. The top 3 move up a tier each Monday: Bronze, Silver, Gold, Sapphire, Ruby, Diamond.
- **Badges.** 11 achievements, from First steps to Graduate.
- **Try it.** Some lessons end with a link to practice what you learned. The order-types lesson opens a stock, and the freight lesson opens Saltwater Shipping.

## Practice trading

- 13 fictional companies plus the TXM index fund. Prices update every 2 seconds.
- Market and limit orders, fractional shares, price alerts and a watchlist.
- Charts for 1D, 1W, 1M, 3M and 1Y.
- Portfolio with allocation by sector, a diversification score and trade history.
- Tools: a "what if I'd invested monthly" backtest and a compound growth planner.

Everything is saved in your browser's local storage.

## Adding a lesson

Edit `courses.js`. For multiple choice (`MC`) and fill in the blank (`FILL`), put the correct option first; the app shuffles the options. `ORDER` lists items in the correct order, and `MATCH` takes four `[term, meaning]` pairs. See the comment at the top of the file.

## Deep links and universal links

| Link | Opens |
| --- | --- |
| `#learn`, `#trade`, `#portfolio`, `#tools`, `#profile` | That section |
| `#invest`, `#trading`, `#money`, `#biz`, `#supply` | That course's path |
| `#LUMQ` | The Lumiq Semiconductors stock page |
| `/learn/supply`, `/stock/LUMQ`, `/portfolio` … | The same screens, on a real domain |

`.well-known/` holds the files iOS and Android check before opening those links in a native app:

- `.well-known/apple-app-site-association` (iOS universal links)
- `.well-known/assetlinks.json` (Android App Links)

Before shipping, replace the placeholders:

1. In `apple-app-site-association`, replace `TEAMID.com.example.toro` with your Apple Team ID and bundle ID, for example `AB12CD34EF.com.yourco.toro`.
2. In `assetlinks.json`, set `package_name` and paste your release signing certificate's SHA-256 fingerprint. Get it with `keytool -list -v -keystore <your.keystore>`, or copy it from Play Console under App integrity.
3. Serve both files over HTTPS at `https://<your-domain>/.well-known/...` with no redirects. Serve the Apple file as `application/json`, even though it has no `.json` extension.
4. In the iOS app, add the Associated Domains capability with `applinks:<your-domain>`.
5. In the Android app, add an intent filter with `android:autoVerify="true"` for `https://<your-domain>` on the paths `/learn`, `/stock`, `/trade`, `/portfolio`, `/tools` and `/profile`.
6. Configure your web host to serve `index.html` for those paths, so the links also work in a browser.

The repo includes `.nojekyll` so GitHub Pages serves the `.well-known` folder.

See [IDEAS.md](IDEAS.md) for the roadmap.

---

Toro is for learning. Companies are fictional, prices are simulated, league players are simulated, and nothing here is financial advice.
