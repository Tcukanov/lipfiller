# LipFiller NYC - Aesthetic Med Studio Website

A modern, SEO-optimized website for LipFiller NYC built with Next.js 14, featuring an admin panel for content management.

## Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **SEO Optimized**: Full metadata, structured data (JSON-LD), sitemap, and robots.txt
- **Admin Panel**: Manage contacts, settings, and content
- **Contact Form**: Stores submissions in database for follow-up
- **Fast Performance**: Built with Next.js App Router and server components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT-based auth
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lipfiller-nyc.git
cd lipfiller-nyc
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create a .env file with the following:
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
NEXT_PUBLIC_SITE_URL="https://lipfiller.nyc"
```

4. Set up the database:
```bash
npm run db:push
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Admin Panel

Access the admin panel at `/admin/login`:
- **Email**: admin@lipfiller.nyc
- **Password**: admin123

**Important**: Change these credentials in production!

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── pricing/           # Pricing page
│   ├── procedures/        # Procedures pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── admin/            # Admin panel components
│   ├── contact/          # Contact form
│   ├── home/             # Home page sections
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication helpers
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # General utilities
└── prisma/
    ├── schema.prisma     # Database schema
    └── seed.ts           # Seed data
```

## Deployment to Vercel

### Option 1: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL` - Use a hosted database like Neon, PlanetScale, or Turso
   - `JWT_SECRET` - A secure random string
   - `NEXT_PUBLIC_SITE_URL` - Your domain (https://lipfiller.nyc)
5. Deploy!

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Production Database

For production, use a hosted database service:

- **Neon** (PostgreSQL): Update `schema.prisma` provider to `postgresql`
- **PlanetScale** (MySQL): Update `schema.prisma` provider to `mysql`
- **Turso** (SQLite edge): Keep SQLite provider

## SEO Features

- **Metadata API**: Full title, description, keywords, and OpenGraph tags
- **Structured Data**: JSON-LD for MedicalBusiness, Service, ContactPage
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Configured robots.txt
- **Semantic HTML**: Proper heading hierarchy and landmarks

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  primary: { /* rose/pink tones */ },
  secondary: { /* dark brown tones */ },
  gold: { /* gold accent tones */ },
}
```

### Content

1. Update `prisma/seed.ts` with your content
2. Run `npm run db:seed` to apply changes
3. Or use the admin panel to update content

### Images

Add your images to the `public` folder:
- `og-image.jpg` - OpenGraph image (1200x630px)
- `favicon.ico` - Favicon
- `apple-touch-icon.png` - Apple touch icon
- `icon-192.png` & `icon-512.png` - PWA icons

## License

MIT

## Support

For questions or support, contact: info@lipfiller.nyc
