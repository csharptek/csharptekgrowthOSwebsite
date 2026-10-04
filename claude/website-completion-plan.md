# growthos.csharptek.com — completion plan (2026-10-04)

Source spec: Csharptek_Website_All_Content_and_Specs.zip (v2026-10-01). Code: repo csharptek/csharptekgrowthOSwebsite (Railway).

## Decision: build on Growth OS, old site = reference only
- Growth OS already has: spec nav/routes, 6 solutions, industries/capabilities/products, careers on existing job_post DB + apply API, blog CMS (/blog + /blogs), contact via Microsoft Graph, ~50 redirects in next.config.mjs, sitemap with www canonical, SITE_INDEXING_ENABLED flag (default noindex).
- Old site: monolithic pages (index.js 93 KB), old positioning; reuse only content (blogs.js, services.js, industries.js, portfolio_case_studies.js), analytics IDs, careers behaviour.

## Rule
No TekGrowth emails until the website is complete.

## Phases
0. Pause TekGrowth sending (Bhanu).
1. Case studies: full data + detail template from docx pack; anonymized; source-documented claims only; Bhanu approves claims/permissions → index.
2. Solution pages: link 2–3 real case studies each; check copy vs 02_Page_Content.
3. Check industries/capabilities/products/about/leadership; port useful old-site content; blog legacy URL review.
4. Contact form → also TekGrowth; GA4/GTM, Clarity, Apollo tracker.
5. Cutover: env (Graph, DB, GTM), SITE_INDEXING_ENABLED=true, redirects check vs old sitemap, Railway domain www.csharptek.com, Search Console.
6. TekGrowth proof URLs → www.csharptek.com, resume sending.
