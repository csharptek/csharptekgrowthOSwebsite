# Website build handoff — new session start here (2026-10-04 ~18:00 IST)

Read also: `claude/website-completion-plan.md` (same folder). Bhanu's rules: very short replies, status labels only, plan first, code on "start coding" (Bhanu already said GO: finish site in ~6–7 h; case-studies page may be fully rewritten). Bhanu pushes himself (GitHub Desktop); Railway auto-deploys. Usage is limited — avoid Chrome; use WebFetch / local files.

## Decision
Build on Growth OS site (this repo); old site = content reference only. Growth OS later becomes www.csharptek.com.

## Folders
- Growth OS (edit here): `D:\OneDrive - Cloudgarner Solutions Pvt Ltd\CTEK Docs\Engineering\Projects\Bhanu\Csharptek Website Growth OS\csharptekgrowthOSwebsite`
  - Next.js app router, JS (.jsx), pnpm. data/site.js (solutions + caseStudies), data/capabilities.js, data/products.js, components/*, lib/{blog,db,jobs}.js, app/** (all routes per spec), next.config.mjs (~50 redirects), sitemap/robots, SITE_INDEXING_ENABLED flag.
- Old site (reference only): `D:\OneDrive - Cloudgarner Solutions Pvt Ltd\CTEK Docs\Engineering\Projects\Bhanu\Csharptek New Website 2026\Github\csharptek2026` — pages router; data/{blogs,services,industries,portfolio_case_studies}.js; pages/careers.js, api/jobs.js, api/apply.js.
- Spec zip: Csharptek_Website_All_Content_and_Specs.zip (attached by Bhanu). Contains 02_Page_Content/*.md, 05 Proof register, 04_Case_Studies/Csharptek_Case_Study_Master_Pack.zip (12 docx, 230–390 words each, real technical detail + "Publication controls").
- Deliver: changed files in Growth OS folder + zip in `D:\OneDrive - Cloudgarner Solutions Pvt Ltd\CTEK Docs\Engineering\Projects\Bhanu\tekgrowthos\Claude outputs\`.

## Findings
- Live https://growthos.csharptek.com: homepage, nav, 6 solutions, contact form OK; all pages noindex (staging, intended).
- All 12 case-study detail pages = one template (app/case-studies/[slug]/page.jsx) with ~200 words + "We're shaping this story…"; data/site.js caseStudies only has slug/name/label/title/summary/solution/status:'review'.
- Solution pages show generic proof cards ("published with client permission…").
- Slug ↔ docx: payautomation=01_PayAutomation, virilocity=02_Virilocity, woundmedix=03_WoundMedix, medical-documentation=04_AI_Medical_Scribe, rag-pipeline=05_RAG_Pipeline, travel-data-ai=06_Azure_AI_CSharp_Architect, landminer=07_LandMiner, healthcare-mobile-app=08_Healthcare_Mobile_App, clinical-workforce-platform=09_EndepthIQ, image-to-video=10_AI_Image_to_Video, connected-wellness-product=11_HoundHeart, dotnet-azure-modernization=12_DotNet_Azure_Modernization.
- TekGrowth outreach emails link to growthos.csharptek.com/case-studies/<slug> → keep these slugs; pages must be complete before sending.

## Work order (6–7 h target)
1. Case studies: new data/caseStudies.js with full sections (hero, challenge, what we built, architecture, engineering, integrations, results, technology, related solution, CTA) from the docx files; anonymized (no client names); only source-documented claims (see Proof register); no prices; rewrite list + detail pages; keep a per-item noindex flag until Bhanu approves claims/permissions.
2. Solution pages: link 2–3 real case studies each; check copy vs 02_Page_Content.
3. Check industries/capabilities/products/about/leadership; port useful old-site content.
4. Build check (pnpm install, next build) — fix all build errors before delivering.
5. Later (not now): contact form → TekGrowth, GA4/GTM/Clarity/Apollo, cutover (SITE_INDEXING_ENABLED, domain, redirects), TekGrowth proof URLs → www.
