BEYOND THE 90. / VERSION 0.7

Multi-section editorial and functionality update.

NEW: search across stories, clubs and provider-fed matches; match filters; manual data refresh; homepage standings snapshot when verified data is available; article share links open the correct article after a reload; accessible focus states; restrained editorial controls.

UNCHANGED: the existing photography and credits, club profiles, tactical walkthrough, reading list, Netlify function and configuration.

IMPORTANT: No 2026/27 statistics are fabricated. A provider key must be configured in Netlify environment variables to display verified competition data. Do not put API keys in GitHub. Some football-data.org free-tier access may not cover the current Premier League season.

INSTALL: Upload the individual contents of this ZIP into the ROOT of your existing GitHub repository, preserving netlify/functions/football.js. Replace matching files, commit to main, and allow Netlify to redeploy. If GitHub web upload refuses an existing file, use the file pencil editor or a desktop Git client. Do not upload the ZIP as a file in the repository.

For a safer update, first replace styles.css and script.js, then index.html, then remaining files.
