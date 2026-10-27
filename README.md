# BEYOND THE 90. — Version 0.5

A multi-section update built on v0.4: expandable standings, club profile tabs, formation switcher, fixture list/calendar, Match Centre with five tabs, improved homepage links, and an optional server-side Premier League data adapter.

## Deploy to your existing GitHub + Netlify site

1. Extract the ZIP. Upload all the files and the `netlify` folder to the **root** of your existing GitHub repository, preserving `netlify/functions/football.js` and `netlify.toml`.
2. Existing files with the same names must be replaced. Commit to `main`.
3. Wait for Netlify's new deploy to show **Published** and refresh the website.
4. The site works without an API key: standings and match results show clear, non-fictional empty states. Club tabs, formation switcher and editorial features still work.

## Optional verified 2026/27 data

This version supports football-data.org API v4 through a Netlify Function. **Do not put an API key into HTML, JavaScript, GitHub or the ZIP.** In Netlify: Project configuration → Environment variables → Add a variable named `FOOTBALL_DATA_API_KEY` with your own key, scoped to Functions/production as available. Redeploy the site. Verify the provider supports 2026/27 Premier League standings and matches on your plan; free-tier availability, coverage and limits can change. The adapter deliberately refuses to show another season as 2026/27 if 2026 data is unavailable.

The function is at `/.netlify/functions/football`. The public response contains football data but never the key. Results are cached for five minutes. A paid API subscription is **not** required to deploy the rest of this update.

## Notes

- Archive photographs are illustrative, sourced from Wikimedia Commons; see `photo-credits.html`.
- Editorial articles remain explicitly labelled demonstrations.
- The club directory is illustrative, not a confirmed list of the 20 clubs in the 2026/27 season.
- Formation markers are illustrative until a verified squad feed is connected.
- Match Centre's Overview/Timeline/Lineups/Tactics/Stats tabs are structural previews; the selected data provider endpoint does not supply detailed events, lineups or match statistics.
