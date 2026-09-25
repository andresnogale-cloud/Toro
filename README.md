# Toro

Toro teaches money and business in bite-size lessons, then lets you practice with $10,000 of virtual cash on a simulated stock market.

Open `index.html` in a browser to run it. There is no build step. Lesson content lives in `courses.js`.

## Design

Pure black, elegant and modern, in the style of a modern trading app. Gold is kept for the Toro brand, progress and achievements. The header and opening screen use the real logo and TORO wordmark (`assets/toro-full.png`, `assets/toro-emb.png`, `assets/toro-word.png`). These are cut from the original `assets/toro-logo.png` with the white background removed. The emblem is also redrawn as a vector (`EMBLEM_D` in `index.html`) for the animated lesson-complete screen.

- **Learn:** a curriculum list rather than a game map. It has an "Up next" card, lesson rows with diamond markers taken from the logo's lattice, thin-line icons, a serif for headings, and restrained feedback with no confetti.
- **Market color:** like Robinhood, the accent turns green when the number on screen is up and orange-red when it's down, including while you drag across a chart.
- **Trade screen:**
  - A scrolling ticker tape of live prices.
  - A chart that switches between line and candlesticks, with volume bars, grid lines, a price axis, a last-price tag and a full crosshair, in the style of TradingView.
  - An order panel, a watchlist with sparklines, top movers, company stats, your position and price alerts.
- **Portfolio screen:** a big account value with rolling digits, a line chart you can drag across to see past values, time ranges, and a stock list with colored price pills.
- **Animations:**
  - An opening animation where the logo draws itself.
  - Charts that draw in, and a pulsing last-price dot.
  - Rolling digits, price flashes and a sliding tab underline.
  - Gold bursts on correct answers and trades, and confetti when a lesson ends.
  - Diamond lesson stops with a rotating ring.
- **Fonts:** Figtree for the interface, JetBrains Mono for chart axes, and Cinzel for the TORO wordmark.
- **Candlestick motion:** a faint gold candlestick chart scrolls slowly across the background, candles rise behind the logo on the opening screen, and a short "bull run" of candles grows when you finish a lesson.
- **Sound:** a futuristic trading-terminal sound set, generated live in the browser with no audio files. Every tap makes a sound, and each part of the app has its own:
  - **Main tabs:** one note each (Learn, Trade, Portfolio, Tools, Profile), each with its own tone.
  - **Learn:** a pluck per course, a bright start, a dull thud on locked lessons and a page swish for the Guidebook.
  - **Lessons:** blips for answers, a woody tick for word tiles, a two-tone for correct, a "sell-off" down-sweep for wrong, a whoosh forward and a drop back.
  - **Trade:**
    - A data chirp when you load a stock and a switch click for toggles.
    - Rising ticks across the time ranges.
    - An up-glide for Buy and a down-glide for Sell.
    - An "order filled" arpeggio, a buzz when an order can't go through, and terminal pings for alerts.
    - Faint market ticks as prices move.
  - **Profile and everywhere else:** a rising tone for your name chip, confirm, copy and warning sounds, and a power-up on your first tap of each visit.
  - **In the phone apps,** every tap also gives a light haptic.
  - The speaker button mutes or unmutes.
- **Reduced motion:** if the device asks for less motion, the animations switch off.

## Courses

| Course | Unit 1 | Unit 2 |
| --- | --- | --- |
| Stocks & Investing | Owning a piece of a company | Building a portfolio |
| Trading | Placing orders | Charts and risk |
| Personal Finance | Budgeting basics | Credit and debt |
| Marketing & Business | Marketing basics | Business by the numbers |
| Global Supply Chains | How goods get to you | Risk and strategy |

Each course has 4 units, and each unit has 3 lessons and a unit review. Each lesson opens with a short tip, then asks 5 questions. That's 300 questions across 60 lessons.

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

## Your personal stock (Profile)

Your profile is a stock page for you. Your ticker comes from your name (tap **Edit name**). The price lists at $10.00 on the day you start and then moves with your learning:

| Each day | Move |
| --- | --- |
| Earn XP | up to +2% (full effect at 60 XP) |
| Hit your daily goal | +0.5% |
| Streak bonus | +0.05% per streak day, up to +0.5% |
| No learning at all | about −3% |

Today only counts once the day ends. The page has:

- A line or candlestick chart you can drag across.
- A rating from Strong buy to Strong sell, based on the last 7 days.
- Stats: all-time high and low, change since IPO, current and best streaks, and days learning.
- A reminder when your stock is about to slip.

Your name, ticker, price and today's move also show in the header. Clicking them opens your profile.

**Learning pays trading cash.** Each finished lesson deposits virtual cash into your practice account: $50 per lesson, $150 per unit review, $25 extra for no mistakes, and $10 for a replay. Deposits appear in History as "Learning reward" and don't count toward your trading return.

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

## Accounts, sync and friends

Toro works fully without an account, saving everything on the device. With Supabase (the free tier is enough), learners can sign in with an email link, or with Google if you enable it. Their lessons, practice account and personal stock then sync across phone and web. They can also follow friends by a 6-character code and compare personal stocks in the **Friends market** on Profile.

**Turn it on (about 10 minutes):**

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run `supabase/schema.sql`. It creates the `profiles`, `app_state` and `follows` tables with row-level security.
3. In **Authentication → URL Configuration**, set the Site URL to your Vercel address and add `https://your-domain/profile` to the redirect URLs.
4. Copy **Project URL** and the **anon public** key from **Project Settings → API** into `config.js`.
5. Optional: enable **Google** under **Authentication → Providers**, then set `google: true` in `config.js`.

The accounts panel stays hidden until `config.js` is filled in.

How the data is handled:

- The anon key is designed to be public, and the security rules in `schema.sql` protect the data.
- Progress (`app_state`) is private to each user.
- The profile card (name, ticker, personal stock price, streak) is visible to other signed-in users, so friends can find each other.
- When someone signs in on a new device, Toro keeps whichever copy has more learning progress.
- The Supabase library is bundled in `vendor/supabase.js` (v2.117.2), so the phone apps don't depend on a CDN.

## Toro as a real app

Toro ships three ways from this one codebase:

| | How people get it | What's in this repo |
| --- | --- | --- |
| **Website** | Visit your Vercel address | `index.html`, `courses.js`, `assets/`, `vercel.json` |
| **Installable web app** | "Install app" in Chrome or Android, or Share → Add to Home Screen on iPhone | `manifest.webmanifest`, `sw.js` (works offline), `icons/` |
| **iPhone and Android apps** | App Store and Google Play | `ios/`, `android/`, `capacitor.config.json` (Capacitor 8) |

The installable app gets:

- A home-screen icon made from the Toro logo.
- A full-screen black launch.
- Offline use after the first visit.
- Shortcuts to Learn, Trade and My stock.
- An "Install app" card at the bottom of the Profile page.

Inside the iPhone and Android apps, Toro also gets:

- Native haptics on answers and trades.
- A black status bar.
- A launch screen.
- Universal links: `https://your-domain/stock/LUMQ` or `/learn/supply` opens the app on that screen.
- The Android back button closes the lesson or sheet, then returns to Learn.

### Build the phone apps

You need a Mac with Xcode for iPhone, and Android Studio for Android.

```bash
npm install
npm run ios       # builds www/, syncs, and opens Xcode
npm run android   # builds www/, syncs, and opens Android Studio
```

In Xcode, choose your team under **Signing & Capabilities** and press Run. In Android Studio, press Run. After changing `index.html` or `courses.js`, run `npm run sync`. To regenerate icons and launch screens from `resources/`, run `npm run icons`.

### Before submitting to the stores

1. **App ID.** It's `com.toro.learn`. Change it in `capacitor.config.json`, `android/app/build.gradle` and in Xcode if you want your own.
2. **Accounts.** You need an Apple Developer Program membership ($99/year) and a Google Play Console account ($25 one-time).
3. **Universal links.**
   - Replace `YOUR-DOMAIN` in `android/app/src/main/AndroidManifest.xml` and `ios/App/App/App.entitlements`.
   - In Xcode, add the **Associated Domains** capability.
   - Fill in your Team ID and signing fingerprint in `.well-known/`.
4. **Store listing.** You need screenshots, a privacy policy URL and an age rating. Toro stores everything on the device and collects no personal data. In the finance category, the app stores will look for the "practice only, not financial advice" wording, which the app already shows.

## Deploy on Vercel

Toro is a static site, so there's no build step. `vercel.json` makes the universal-link paths (`/learn/supply`, `/stock/LUMQ`, `/portfolio` …) serve the app. It also serves the Apple association file as JSON.

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import `andresnogale-cloud/Toro`. If it isn't listed, choose **Adjust GitHub App Permissions** and give Vercel access to the repo.
3. Leave **Framework Preset** as *Other*, with no build command and the output directory as the repo root. Click **Deploy**.

Every push to the branch redeploys automatically.

See [IDEAS.md](IDEAS.md) for the roadmap.

---

Toro is for learning. Companies are fictional, prices are simulated, league players are simulated, and nothing here is financial advice.
