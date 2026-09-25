# Toro ideas

Toro teaches money, markets and business in bite-size lessons, then lets you practice what you learned in a simulator. Ideas are grouped by effort.

## Done

- [x] 5 courses, 10 units, 30 lessons and 150 questions: Stocks & Investing, Trading, Personal Finance, Marketing & Business, Global Supply Chains
- [x] 5 question types: multiple choice, true or false, fill in the blank, match the pairs, put in order
- [x] Lesson path with locked and unlocked lessons, unit reviews and Guidebooks
- [x] XP, daily goal, streaks with streak freezes, hearts, gems and a shop
- [x] Daily quests, including one that asks for a practice trade
- [x] Weekly league against simulated players, with promotion and demotion
- [x] 11 badges
- [x] "Try it" links from lessons into the simulator and calculators
- [x] Trading simulator with market and limit orders, alerts, watchlist, portfolio and diversification score
- [x] Deep links and universal-link config files

## More content (highest impact)

- **More units per course.** Aim for 5–6 units each. Ideas:
  - *Investing:* bonds, reading an earnings report, valuation basics, retirement accounts, taxes on gains
  - *Trading:* volume, momentum vs. mean reversion, options basics (calls, puts, payoff diagrams), trading psychology
  - *Personal Finance:* paychecks and taxes, insurance, renting vs. buying, student loans, side income
  - *Marketing & Business:* branding, pricing strategy, social and content marketing, unit economics, pitching investors, reading a P&L
  - *Global Supply Chains:* procurement and negotiation, warehousing and inventory math (EOQ, reorder point), last-mile delivery, sustainability and carbon, port congestion case studies, trade agreements
- **New courses:**
  - *Economics 101:* inflation, interest rates and central banks, GDP, recessions
  - *Crypto basics:* blockchains, wallets, scams to avoid, clearly in learning mode
  - *Entrepreneurship:* from idea to first customer, a lean canvas, fundraising
  - *International Trade and Logistics Careers:* freight forwarding, customs brokerage, how to get certified
- **Scenario lessons.** Short stories where you make decisions, for example "A typhoon closes a port. Reroute, air-freight, or wait?", with outcomes and costs.
- **Supply chain simulator.** A companion to the trading simulator: run a small import business. Order stock from suppliers in different countries, choose ocean or air, pay tariffs, and survive random disruptions. Connect it to lessons the way trading is connected now.

## Quick wins (a day or less each)

- **Mistakes review.** A practice session built from questions you missed. Completing it earns a heart.
- **Speaking the lesson aloud** with text-to-speech, for accessibility.
- **Streak calendar** showing which days you practiced.
- **Portfolio value chart** built from daily snapshots.
- **Recurring buys** in the simulator ("$50 of TXM every Monday") to practice dollar-cost averaging.
- **Share cards** for streaks, badges and trades, each linking back to Toro with a universal link.
- **Sound effects and haptics** for right and wrong answers in the native app.

## Medium features (about a week each)

- **Real friends leagues** with invite links (`/league/<code>`). Needs accounts.
- **Placement test** so experienced learners can skip ahead.
- **Timed challenge mode** that answers as many questions as possible in 60 seconds for bonus XP.
- **Market events.** Simulated earnings reports and news headlines that move specific stocks, with a quick lesson on why.
- **Push notifications** for streak reminders, alerts and filled orders.

## Bigger bets

- **Real brokerage connection.** Let learners who finish a course open a real account through a licensed brokerage partner. Alpaca and DriveWealth offer broker APIs. This needs the partner's compliance review, KYC and regulatory approval before any real money moves. Until then, rewards stay virtual.
- **Live TradingView charts.** TradingView's embeddable widgets could show real market charts once Toro is hosted on its own domain. The artifact preview blocks outside scripts and iframes.
- **Personal stock leagues.** Compare your personal stock with friends' tickers, and share a card of your chart.

- **Accounts and sync.** Sign in with Apple or Google so progress follows you between devices.
- **Native apps.** Wrap the web app with Capacitor or rebuild in React Native. The `.well-known` files already cover universal links.
- **AI tutor.** Explains a wrong answer in different words, answers follow-up questions, and makes new practice questions from your weak spots.
- **Classroom and team mode.** Teachers and managers assign courses and see progress. A strong fit for schools, business programs and logistics companies training new staff.
- **Real market data in delayed mode.** Offer it as a second mode next to the fictional market. Needs a licensing review.
- **Certificates.** A shareable certificate for finishing a course, starting with Global Supply Chains for career changers.

## Guardrails to keep

- Always label simulated prices, fictional companies and simulated league players.
- Never present anything as financial advice.
- Keep lesson facts reviewed by someone with domain expertise before scaling content.
- If real data or real money is ever added, get legal and compliance review first.
