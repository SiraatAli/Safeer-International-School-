# Safeer International School — Demo Website

A multi-page, frontend-only website (Home, About, Programs, Why Safeer, Gallery, Admissions, Contact) built with Next.js 14 (App Router), Tailwind CSS, Framer Motion and lucide-react.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev        # open http://localhost:3000
```

Production build: `npm run build && npm start`

## Editing content

Almost everything lives in **`lib/siteConfig.js`**: school name, tagline, phone, WhatsApp number, email, address, social links, programs, "Why Safeer" points, gallery images and admissions text.

- **WhatsApp:** set `whatsappNumber` in international format, digits only (e.g. `923001234567`). Every WhatsApp button and the enquiry form use it.
- **Google Map:** open Google Maps → Share → *Embed a map* → copy the `src="…"` URL into `mapEmbedUrl`. The placeholder is replaced automatically.
- **Real photos:** put files in `public/images/` and change a gallery entry to `src: "/images/classroom.jpg"`.
- **Logo:** replace `public/logo-emblem.png` (emblem only, transparent background). `public/og-logo.png` is used for social sharing, and `app/icon.png` / `app/apple-icon.png` are the browser icons.
- **Domain:** after deploying, update `url` so the sitemap, Open Graph and schema use the real address.

## Project structure

```
app/                 layout (top bar, navbar, footer, SEO), one folder per page:
  page.js            Home
  about/ programs/ why-safeer/ gallery/ admissions/ contact/
components/          reusable sections (Hero, PageHeader, ProgramCards, ProgramDetails,
                     WhyChooseGrid, SkillsGrid, Assessment, GalleryGrid, AdmissionForm,
                     AdmissionSteps, ContactInfo, CtaBanner, Navbar, TopBar, Footer, ...)
lib/                 siteConfig.js (all content), whatsapp.js (wa.me link helper)
public/              logo files
```

Colours (navy #002163 and gold #FDC800) live in `tailwind.config.js` under `brand`.

## Deploy free on Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project** → import the repo.
3. Keep the defaults (Vercel detects Next.js) → **Deploy**.
4. You get a free `*.vercel.app` URL. A custom domain can be added later under **Settings → Domains**.

Or from the terminal: `npx vercel`.
