# Robots.txt & scraping policy

Fill this in per derived company. Check `https://www.helpnet.ro/robots.txt` before the
first run and confirm the careers listing + sitemap are not disallowed for a
general `User-agent: *`.

## What this scraper reads

| Path | Role |
|---|---|
| `https://careers.phoenixgroup.eu/HelpNet/` | Public list of open positions (server-rendered HTML) |
| `https://careers.phoenixgroup.eu/sitemap.xml` | Job sitemap — canonical `https://careers.phoenixgroup.eu/HelpNet/job/<slug>/` permalinks |
| `https://careers.phoenixgroup.eu/HelpNet/job/<slug>/` | Individual job pages (only referenced, not fully crawled) |
| ANOFM | `POST https://mediere.anofm.ro/api/entity/vw_public_job_posting` filtered by CIF |

## Politeness (defaults — keep unless the site explicitly permits more)

| Measure | Value | Where |
|---|---|---|
| Requests | sequential, one at a time | `scraper/index.js` (no `Promise.all` on fetches) |
| Delay between pages | `pageDelayMs` (1000 ms) | `scraper/config/scraper.json` |
| Timeout | `requestTimeoutMs` (10000 ms) | `scraper/config/scraper.json` |
| User-Agent | `job_seeker_ro_spider` | identifies the scraper in server logs |
| Volume | listing + sitemap + ANOFM (3 requests) | — |

No assets downloaded, no JS rendered, no links followed outside the job-URL
prefix. Never bypass a login or authentication wall.
