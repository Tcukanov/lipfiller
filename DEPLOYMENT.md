# Deployment Guide - LipFiller NYC

## Step 1: Push to GitHub

### Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `lipfiller-nyc`
3. Make it **Private** (recommended for business sites)
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

### Push Your Code

After creating the repo, run these commands in your terminal:

```bash
cd /Users/mustafa/Documents/lipfiller

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/lipfiller-nyc.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Set Up Production Database

For production, you need a hosted database. I recommend **Turso** (SQLite) or **Neon** (PostgreSQL).

### Option A: Turso (SQLite - Easiest)

1. Go to https://turso.tech
2. Sign up for free
3. Create a new database: `lipfiller-nyc`
4. Copy your database URL (looks like: `libsql://...turso.io`)
5. Create an auth token
6. Your DATABASE_URL will be: `libsql://[database-name]-[username].turso.io?authToken=[your-token]`

### Option B: Neon (PostgreSQL)

1. Go to https://neon.tech
2. Sign up for free
3. Create a new project: `lipfiller-nyc`
4. Copy the connection string
5. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

---

## Step 3: Deploy to Vercel

### Deploy via Vercel Website (Easiest)

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `lipfiller-nyc` repository
5. Configure the project:

   **Environment Variables** (click "Environment Variables"):
   ```
   DATABASE_URL = [your-database-url-from-step-2]
   JWT_SECRET = [generate-a-secure-random-string]
   NEXT_PUBLIC_SITE_URL = https://lipfiller.nyc
   ```

6. Click "Deploy"

### Generate JWT Secret

Run this to generate a secure JWT secret:

```bash
openssl rand -base64 32
```

---

## Step 4: Set Up Database on Vercel

After first deployment, you need to initialize the database:

1. Go to your Vercel project dashboard
2. Click on the deployment
3. Go to "Settings" → "Functions"
4. Or run locally:
   ```bash
   # Set your production DATABASE_URL
   export DATABASE_URL="your-production-database-url"
   
   # Push schema
   npx prisma db push
   
   # Seed data
   npm run db:seed
   ```

---

## Step 5: Connect Custom Domain (lipfiller.nyc)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `lipfiller.nyc` and `www.lipfiller.nyc`
4. Vercel will show you DNS records to add:

   **For lipfiller.nyc:**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

   **For www.lipfiller.nyc:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

5. Add these DNS records in your domain registrar (GoDaddy, Namecheap, etc.)
6. Wait 5-10 minutes for DNS propagation

---

## Step 6: Security Checklist

Before going live:

- [ ] Change admin password from default `admin123`
- [ ] Update `JWT_SECRET` to a secure random string
- [ ] Verify DATABASE_URL is set correctly
- [ ] Test all forms and admin panel
- [ ] Add SSL certificate (Vercel does this automatically)
- [ ] Update Google Maps API key if needed
- [ ] Add real images to `/public`
- [ ] Test on mobile devices

---

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically redeploy!

---

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard. Common issues:
- Missing environment variables
- Database connection issues
- TypeScript errors

### Database Issues

If you see Prisma errors:
1. Make sure DATABASE_URL is set in Vercel
2. Run `npx prisma generate` in your build
3. Check that your schema is compatible with your database provider

### Admin Panel Not Working

- Verify JWT_SECRET is set
- Check that database was seeded
- Try creating a new admin user

---

## Support

If you need help:
- Check Vercel logs for errors
- Verify all environment variables are set
- Make sure database is accessible
