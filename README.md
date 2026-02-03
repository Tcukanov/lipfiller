# LipFiller NYC - Aesthetic Med Studio Website

A modern, SEO-optimized website for LipFiller NYC built with Next.js 14.

## ✨ Features

- **Modern UI/UX**: Elegant design with luxurious color scheme (charcoal, cream, gold)
- **Fully SEO Optimized**: Complete metadata, structured data (JSON-LD), sitemap, robots.txt
- **Easy to Edit**: All content in simple TypeScript files - no database needed!
- **Contact Form**: Ready to integrate with email services
- **Fast Performance**: Built with Next.js App Router and optimized for speed
- **Mobile Responsive**: Perfect on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom luxurious theme
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
cd /Users/mustafa/Documents/lipfiller
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## 📝 How to Edit Content

All content is in simple TypeScript files in `/src/data/`. No database or admin panel needed!

### Edit Site Info (Phone, Address, etc.)
**File**: `src/data/site-config.ts`

```typescript
export const siteConfig = {
  name: 'LipFiller NYC',
  contact: {
    phone: '646.543.8898',  // Change this
    email: 'info@lipfiller.nyc',  // Change this
    address: '245 5th Avenue...',  // Change this
  },
  // ... more settings
}
```

### Edit Procedures
**File**: `src/data/procedures.ts`

```typescript
export const procedures: Procedure[] = [
  {
    slug: 'russian-lip-filler',
    title: 'Russian Lip Filler Technique',
    price: 'Starting at $650',
    description: '...',
    // ... edit or add new procedures
  },
]
```

### Edit Pricing
**File**: `src/data/pricing.ts`

```typescript
export const pricingCategories = [
  {
    title: 'Lip Enhancement',
    services: [
      { name: 'Russian Lip', price: '$650+', description: '...' },
      // ... add or edit services
    ],
  },
]
```

### Edit Testimonials
**File**: `src/data/testimonials.ts`

```typescript
export const testimonials = [
  {
    name: 'Sarah M.',
    treatment: 'Russian Lip Technique',
    text: 'Amazing results!',
    rating: 5,
  },
]
```

### Edit Services (Home Page)
**File**: `src/data/services.ts`

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* charcoal/black */ },
  cream: { /* warm cream */ },
  gold: { /* elegant gold */ },
}
```

### Change Fonts
Edit `src/app/layout.tsx` to import different Google Fonts.

### Add Images
Place images in `/public/` folder:
- `og-image.jpg` - Social media preview (1200x630px)
- `favicon.ico` - Browser icon
- Add procedure images, gallery images, etc.

## 📧 Contact Form Setup

The contact form currently logs to console. To receive emails:

**Option 1: Formspree (Easiest)**
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update `src/app/api/contact/route.ts`

**Option 2: Resend**
1. Sign up at https://resend.com
2. Get API key
3. Install: `npm install resend`
4. Update the API route

## 🌐 Deploy to Vercel

1. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/lipfiller-nyc.git
git push -u origin main
```

2. Go to https://vercel.com
3. Import your repository
4. Click "Deploy"

No environment variables needed! It's that simple.

### Connect Custom Domain

In Vercel:
1. Go to Settings → Domains
2. Add `lipfiller.nyc`
3. Update DNS records at your registrar

## 📁 Project Structure

```
src/
├── app/              # Pages
│   ├── page.tsx      # Home
│   ├── procedures/   # Procedures pages
│   ├── pricing/      # Pricing page
│   ├── gallery/      # Gallery page
│   └── contact/      # Contact page
├── components/       # React components
│   ├── home/        # Home sections
│   ├── layout/      # Header, Footer
│   └── ui/          # Reusable components
└── data/            # ✅ EDIT CONTENT HERE!
    ├── site-config.ts   # Site settings
    ├── procedures.ts    # Procedures data
    ├── pricing.ts       # Pricing data
    ├── services.ts      # Services data
    └── testimonials.ts  # Testimonials
```

## ✅ SEO Features

- ✅ Optimized meta tags on every page
- ✅ JSON-LD structured data for Google
- ✅ Automatic sitemap.xml generation
- ✅ Robots.txt configured
- ✅ Semantic HTML with proper headings
- ✅ Mobile-friendly
- ✅ Fast page load times
- ✅ OpenGraph tags for social sharing

## 📱 Pages Included

- **Home** - Hero, services, features, gallery preview, CTA
- **Procedures** - All treatments with detailed pages
- **Pricing** - Transparent pricing with packages
- **Gallery** - Before/after showcase + testimonials
- **Contact** - Contact form with map

## 💡 Quick Tips

1. **Test locally** before deploying: `npm run dev`
2. **Edit content** in `/src/data/` files
3. **Add images** to `/public/` folder
4. **Change colors** in `tailwind.config.ts`
5. **Update SEO** in each page's metadata

## 📞 Support

Questions? The code is clean and well-commented. Check the files in `/src/data/` first!

---

Made with ❤️ for LipFiller NYC
