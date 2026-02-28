# Cape Cruz Tours & Transport

**Cape Cruz Tours & Transport** is a professional tourism and transport company based in **Cape Town, South Africa**. This repository contains the full-stack website built with **Next.js 16 + TypeScript**, deployed on **Vercel**, featuring:

- **Calendly booking** integration
- **Contact form** with Gmail SMTP email delivery (serverless API route)
- Branded UI with teal (`#009688`) colour scheme and Tailwind CSS
- Accessible, responsive layout

---

## Services

- Airport pickups & drop-offs (24/7)
- Hotel & guesthouse transfers
- Custom day tours (Table Mountain, Cape Point, Winelands, and more)
- Group & family trips (up to 10 passengers)
- Corporate transportation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Email | Nodemailer + Gmail SMTP |
| Booking | Calendly embed |
| Deployment | Vercel |

---

## Getting Started (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/ShaanWocker/CapeCruze.git
cd CapeCruze

# 2. Install dependencies
npm install

# 3. Copy environment variables template
cp .env.local.example .env.local
# Edit .env.local and fill in your Gmail App Password

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

The contact form sends emails via Gmail SMTP. You must configure the following environment variables.

### Required Variables

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | Gmail SMTP host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (465 = SSL, 587 = TLS) | `465` |
| `SMTP_USER` | Your Gmail address | `ShaanWocker@gmail.com` |
| `SMTP_PASS` | Gmail **App Password** (not your regular password) | `xxxx xxxx xxxx xxxx` |
| `MAIL_TO` | Recipient email address | `ShaanWocker@gmail.com` |
| `MAIL_FROM` | Sender display name + address | `Cape Cruz Tours & Transport <ShaanWocker@gmail.com>` |

### Setting Up a Gmail App Password (Option A)

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (2FA) if not already enabled
3. Search for **"App passwords"** in the Security section
4. Create a new App Password → Select app: **Mail**, device: **Other** → name it `CapeCruze`
5. Copy the generated 16-character password
6. Paste it as the value for `SMTP_PASS`

> **Never commit your `.env.local` file or App Password to version control.** The `.gitignore` already excludes `.env.local`.

### Local Setup

```bash
cp .env.local.example .env.local
# Edit .env.local with your credentials
```

### Vercel Deployment Setup

1. Push this repository to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import `ShaanWocker/CapeCruze`
3. In the Vercel dashboard, navigate to your project → **Settings** → **Environment Variables**
4. Add each variable from the table above:

   | Variable | Value |
   |---|---|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `465` |
   | `SMTP_USER` | `ShaanWocker@gmail.com` |
   | `SMTP_PASS` | *(your 16-character Gmail App Password)* |
   | `MAIL_TO` | `ShaanWocker@gmail.com` |
   | `MAIL_FROM` | `Cape Cruz Tours & Transport <ShaanWocker@gmail.com>` |

5. Click **Save** and **Deploy** (or redeploy if already deployed)

---

## Project Structure

```
CapeCruze/
├── app/
│   ├── layout.tsx          # Root HTML layout + metadata
│   ├── page.tsx            # Main one-page site
│   ├── globals.css         # Global styles (Tailwind + CSS variables)
│   └── api/
│       └── contact/
│           └── route.ts    # Serverless API: sends email via Gmail SMTP
├── components/
│   ├── Navigation.tsx      # Responsive side nav + menu button
│   ├── Hero.tsx            # Hero/banner with Book Now CTA
│   ├── Features.tsx        # "Why Travel With Us" section
│   ├── Services.tsx        # Services grid
│   ├── Testimonials.tsx    # Customer reviews
│   ├── CalendlyEmbed.tsx   # Embedded Calendly booking
│   ├── ContactForm.tsx     # Contact & quote request form
│   └── Footer.tsx          # Footer with contact info & social links
├── public/
│   └── images/             # Site images
├── .env.local.example      # Environment variable template
├── next.config.ts
└── tsconfig.json
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Calendly Booking

Booking is powered by [Calendly](https://calendly.com/shaanwocker/30min). The scheduling widget is embedded directly on the page and is also accessible via the **Book Now** button in the hero section.

---

## Licence

[MIT](LICENSE) (c) Cape Cruz Tours & Transport
