# 📝 How to Edit Your Website Content

Everything is simple! No database, no admin panel needed. Just edit files and deploy.

## 🎯 Quick Start

All your content is in the `/src/data/` folder. Edit these files to change your website:

```
src/data/
├── site-config.ts      ← Business info, phone, address, social links
├── procedures.ts       ← Treatment details and pricing
├── pricing.ts          ← Pricing packages and services
├── services.ts         ← Services shown on home page
└── testimonials.ts     ← Client reviews
```

---

## 📞 Change Phone Number, Address, Email

**File:** `src/data/site-config.ts`

```typescript
export const siteConfig = {
  contact: {
    phone: '646.543.8898',        // ← Change this
    phoneLink: '6465438898',      // ← Change this (no dots/dashes)
    email: 'info@lipfiller.nyc',  // ← Change this
    address: '245 5th Avenue, Floor 3, New York, NY, 10016',  // ← Change this
  },
}
```

---

## 💉 Add or Edit Procedures

**File:** `src/data/procedures.ts`

### To edit existing procedure:
Find the procedure and change the text:

```typescript
{
  title: 'Russian Lip Filler Technique',
  price: 'Starting at $650',  // ← Change price
  description: 'Your description here',  // ← Change description
  // ... more fields
}
```

### To add new procedure:
Copy an existing procedure block and modify it:

```typescript
export const procedures: Procedure[] = [
  // ... existing procedures
  {
    slug: 'new-treatment',  // ← URL: /procedures/new-treatment
    title: 'New Treatment Name',
    category: 'Category Name',
    description: 'Short description',
    content: '<p>Full description with HTML</p>',
    benefits: [
      'Benefit 1',
      'Benefit 2',
    ],
    duration: '30 minutes',
    recovery: '24 hours',
    price: 'Starting at $500',
    faqs: [
      {
        question: 'Question?',
        answer: 'Answer here.',
      },
    ],
  },
]
```

---

## 💰 Change Prices

**File:** `src/data/pricing.ts`

### Edit service prices:

```typescript
export const pricingCategories = [
  {
    title: 'Lip Enhancement',
    services: [
      {
        name: 'Russian Lip Technique',
        price: '$650+',  // ← Change this
        description: 'Description',
      },
      // Add more services here
    ],
  },
]
```

### Edit packages:

```typescript
export const pricingPackages = [
  {
    name: 'Lip Lover',
    price: '$999',  // ← Change price
    description: 'Package description',
    features: [
      '1ml Premium Lip Filler',  // ← Edit features
      'Lip Flip (Botox)',
    ],
  },
]
```

---

## ⭐ Add or Edit Testimonials

**File:** `src/data/testimonials.ts`

```typescript
export const testimonials = [
  {
    name: 'Sarah M.',           // ← Client name
    treatment: 'Russian Lip Technique',  // ← What they got
    text: 'Amazing results!',   // ← Their review
    rating: 5,                  // ← Star rating (1-5)
  },
  // Add more testimonials here
]
```

---

## 🏠 Change Home Page Services

**File:** `src/data/services.ts`

```typescript
export const services = [
  {
    title: 'Service Name',
    description: 'Service description',
    href: '/procedures#section',  // ← Where button links to
  },
]
```

---

## 🎨 Change Hero Section (Home Page)

**File:** `src/data/site-config.ts`

```typescript
hero: {
  badge: 'New York City',
  title: 'Aesthetic Med Studio',  // ← Change title
  subtitle: 'Your subtitle here',  // ← Change subtitle
  cta: {
    primary: 'Book Your Appointment',  // ← Button text
    secondary: 'Explore Procedures',
  },
}
```

---

## 📱 Change Social Media Links

**File:** `src/data/site-config.ts`

```typescript
social: {
  instagram: 'https://instagram.com/lipfiller.nyc',  // ← Your Instagram
  facebook: 'https://facebook.com/lipfiller.nyc',    // ← Your Facebook
},
```

---

## 🚀 After Making Changes

1. **Test locally:**
```bash
npm run dev
```
Open http://localhost:3000 and check your changes

2. **Deploy:**
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild your site in ~1 minute!

---

## 💡 Pro Tips

- **Test before deploying**: Always run `npm run dev` to preview changes
- **Small commits**: Make one change at a time and test it
- **Backup**: Keep a copy of your data files before making big changes
- **Copy-paste**: When adding new items, copy an existing one and modify it

---

## 🆘 Need Help?

- Check the README.md for more info
- Each file has comments explaining what each field does
- The structure is consistent - if you can edit one item, you can edit them all!

---

**Remember:** Just edit the files in `/src/data/`, save, and push. That's it! 🎉
