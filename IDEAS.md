# Toro ideas

The ideas are grouped by how much work they take. The items marked done are already in `index.html`.

## Done in this version

- [x] Paper trading with $10,000 virtual cash and fractional shares
- [x] Market and limit orders, with limit orders that fill automatically
- [x] Price alerts
- [x] Watchlist, sector filters and search
- [x] Charts for 1D, 1W, 1M, 3M and 1Y with a hover crosshair
- [x] Diversification score and sector allocation
- [x] Dollar-cost averaging backtest and compound growth planner
- [x] Question of the day and short lessons
- [x] Deep links (`#LUMQ`, `/stock/LUMQ`) and universal-link config files
- [x] Light and dark themes, phone layout with a bottom tab bar

## Quick wins (a day or less each)

- **Portfolio value chart.** Save a daily snapshot of account value and chart it over time.
- **Stop-loss orders.** Sell automatically if a stock falls below a set price.
- **Recurring buys.** "Buy $50 of TXM every Monday" to practice DCA for real inside the app.
- **Trade journal.** Ask "Why are you buying this?" on each trade, then show the note next to the result later.
- **Share a trade card.** An image of "I bought LUMQ at $316" to post, with a deep link back to the stock.
- **Haptic and sound cues** on order fills in the native app.

## Medium features (about a week each)

- **Market events.** Simulated earnings reports and news headlines that move specific stocks, so players learn how news affects prices.
- **Challenges and badges.** "Beat TXM this month", "Hold 5 sectors", "Place your first limit order". Track streaks alongside the daily quiz.
- **Friends leagues.** Private leagues where friends start with the same cash and compete on return over a month. Invite links use universal links (`/league/<code>`).
- **Risk profile quiz.** Five questions at sign-up that suggest a starting mix (for example 70% TXM and 30% picks) and explain why.
- **Options basics.** A simplified calls-and-puts simulator with payoff diagrams, kept clearly in learning mode.
- **Push notifications** for alerts and filled orders once there's a native app.

## Bigger bets

- **Real market data in delayed mode.** Plug in a market data API (15-minute delayed quotes are cheap) as a second mode beside the fictional market. This needs licensing review.
- **Accounts and sync.** Sign in with Apple or Google so a portfolio follows you across phone and web.
- **Native apps.** Wrap the web app with Capacitor or rebuild in React Native. The `.well-known` files already cover universal links.
- **AI coach.** Explain in plain language why the portfolio moved today, and flag concentration risk before a trade goes through.
- **Classroom mode.** Teachers create a class league, assign lessons and see anonymized progress. A strong fit for schools and finance clubs.

## Guardrails to keep

- Always label simulated prices and fictional companies.
- Never present anything as investment advice.
- If real data or real money is ever added, get legal and compliance review first.
