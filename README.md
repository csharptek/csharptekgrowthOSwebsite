# Csharptek Growth OS Website

A fresh Next.js website for Csharptek, designed around AI, product engineering and modernization. The content and route model follows the supplied 2026 website plan; the previous website is used as a reference for career, contact, analytics and SEO migration behavior.

## Local development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Environment configuration

Copy `.env.example` to `.env.local` and add the existing production credentials and property IDs. Keep secrets server-side. `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and the reCAPTCHA site key are public identifiers; database and Microsoft Graph values must remain private.

- Careers listings use `DATABASE_URL` and the existing `job_post` table.
- Application submissions preserve the existing multipart field names and forward to `CAREERS_APPLY_API_URL`; the current careers service is the default.
- If reCAPTCHA is enabled, configure both its public site key and server secret.
- Initiative inquiries are sent through Microsoft Graph to `info@csharptek.com`. Configure an application with permission to send as `MICROSOFT_SENDER_EMAIL`.
- Use the existing Google Analytics / Tag Manager properties. When GTM is configured, keep the GA4 tag in that container to avoid duplicate page views.

## Site areas

- `/` — homepage and primary conversion journey
- `/solutions/*` — the six solution areas
- `/azure-app-modernization-services` and `/services/marketplace` — preserved priority URLs
- `/industries/*`, `/capabilities/*`, and `/products/*` — supporting site structure from the plan
- `/case-studies/*` — anonymized case study drafts; detail pages are `noindex` until claims and publication permissions are approved
- `/careers` — existing jobs data and application flow
- `/contact` — initiative form
- `/blog/*` and `/blogs/*` — published CMS posts; both URL shapes remain available while legacy search value is reviewed

## SEO migration notes

Permanent redirects are configured in `next.config.mjs`. The `/blogs/:slug` blanket redirect has intentionally been left out so individual legacy URLs can be reviewed before consolidation. `/portfolio` currently redirects to `/case-studies`; preserve or change that mapping after comparing historical traffic and backlinks. Sitemap entries use the www canonical host and include published blog posts when the database is configured.

## Before launch

Confirm the deployment environment and analytics properties, check the careers database and application service, verify Microsoft Graph delivery, and review case study claims/permissions. The privacy notice should be checked against Csharptek’s actual retention and service-provider practices before production.
