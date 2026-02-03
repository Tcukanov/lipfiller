# 📸 Image Guide - Automatic WebP Conversion

Next.js automatically converts all your images to **WebP format** for better performance! No extra work needed.

## ✅ How It Works

When you use the Next.js `<Image>` component:
1. ✅ **Automatic WebP conversion** - serves WebP to browsers that support it
2. ✅ **Fallback to original** - serves JPG/PNG to older browsers
3. ✅ **Lazy loading** - images load only when needed
4. ✅ **Responsive sizes** - serves optimal size for each device
5. ✅ **Blur placeholder** - smooth loading experience
6. ✅ **SEO optimized** - proper alt text and metadata

## 📁 Where to Put Your Images

Place all images in the `/public/img/` folder:

```
/public/
├── img/
│   ├── lip-filler-nyc.jpg      ← Hero image (main homepage)
│   ├── gallery/
│   │   ├── before-after-1.jpg
│   │   ├── before-after-2.jpg
│   │   └── ...
│   └── procedures/
│       ├── russian-lips.jpg
│       └── ...
├── og-image.jpg                ← Social media preview (1200x630px)
├── favicon.ico                 ← Browser tab icon
├── apple-touch-icon.png        ← iOS home screen icon
├── icon-192.png                ← PWA icon
└── icon-512.png                ← PWA icon
```

## 🖼️ Required Images

### 1. Hero Image (Homepage)
**File**: `lip-filler-nyc.jpg`
- **Size**: 600-800px wide
- **Aspect ratio**: 4:5 (portrait)
- **Format**: JPG or PNG (Next.js converts to WebP automatically!)
- **Quality**: High quality, well-lit photo

### 2. Social Sharing Image
**File**: `og-image.jpg`
- **Size**: Exactly 1200x630px
- **Format**: JPG
- **Content**: Your logo/branding with text

### 3. Favicon
**File**: `favicon.ico`
- **Size**: 32x32px or 16x16px
- **Format**: ICO file

### 4. PWA Icons
**Files**: `icon-192.png` and `icon-512.png`
- **Sizes**: 192x192px and 512x512px
- **Format**: PNG with transparent background

## 🎨 Image Recommendations

### For Best Results:
- **High quality**: Use professional photos
- **Good lighting**: Natural, well-lit images
- **Consistent style**: Keep a cohesive look across all images
- **Alt text**: Already included for SEO
- **File size**: Don't worry - Next.js optimizes automatically!

### Optimal Sizes:
```
Hero Image:       600-800px wide
Gallery Images:   400-600px wide
Thumbnails:       200-300px wide
```

## 🚀 How Next.js Optimizes

```tsx
<Image
  src="/lip-filler-nyc.jpg"
  alt="Descriptive alt text for SEO"
  width={600}
  height={750}
  quality={85}        // Compression quality (85 is optimal)
  priority            // Load immediately for hero images
  sizes="..."         // Responsive sizes for different screens
/>
```

### What Happens:
1. **Build time**: Next.js analyzes your image
2. **Runtime**: Serves WebP to modern browsers
3. **Fallback**: Serves original JPG to older browsers
4. **Responsive**: Generates multiple sizes (small, medium, large)
5. **CDN**: Images cached on Vercel's edge network

## 📊 SEO Benefits

✅ **Fast loading** - WebP is 25-35% smaller than JPG
✅ **Better Core Web Vitals** - Improves LCP (Largest Contentful Paint)
✅ **Lazy loading** - Doesn't slow down initial page load
✅ **Alt text** - All images have descriptive alt text for accessibility
✅ **Proper dimensions** - No layout shift (good CLS score)

## 🎯 Action Steps

1. **Add your hero image**:
   - Name it `lip-filler-nyc.jpg`
   - Place in `/public/img/` folder
   - Recommended: 600-800px wide, 4:5 aspect ratio

2. **Test locally**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3001

3. **Deploy**:
   ```bash
   git add public/img/lip-filler-nyc.jpg
   git commit -m "Add hero image"
   git push
   ```

That's it! Next.js handles all the WebP conversion automatically! 🎉

## 💡 Pro Tip

You can also use `.png` files - Next.js will still convert them to WebP. Just make sure:
- Images are high quality
- Not excessively large (under 5MB is good)
- Well-composed and professional

---

**No manual conversion needed!** Just drop your JPG/PNG files in `/public/` and Next.js does the rest! ⚡
