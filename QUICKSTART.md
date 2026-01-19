# 🚀 EmbDev - Quick Start Guide

## Prerequisites
- **Node.js**: 18+ (Download from [nodejs.org](https://nodejs.org))
- **Git**: For version control
- **npm** or **yarn**: Package manager (comes with Node.js)

## Installation (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:3000`

You should see the EmbDev landing page with all sections!

---

## 📁 Project Files Overview

### Core Application
| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with metadata and global setup |
| `app/page.tsx` | Landing page (/) |
| `app/globals.css` | Global styles and theme |
| `app/linux/page.tsx` | /linux section |
| `app/rtos/page.tsx` | /rtos section |
| `app/android/page.tsx` | /android section |
| `app/autosar/page.tsx` | /autosar section |

### Components
| File | Purpose |
|------|---------|
| `components/Navbar.tsx` | Header with navigation |
| `components/Footer.tsx` | Footer with social links |
| `components/SectionLayout.tsx` | Shared layout for sections |

### Configuration
| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript settings |
| `tailwind.config.ts` | Tailwind CSS theme |
| `next.config.mjs` | Next.js settings |
| `vercel.json` | Vercel deployment config |

---

## 🛠️ Available Commands

```bash
# Development
npm run dev           # Start dev server on :3000

# Production
npm run build         # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployed Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page with hero and features |
| `/linux` | Embedded Linux knowledge base |
| `/rtos` | RTOS architecture and design |
| `/android` | Android/AOSP guide |
| `/autosar` | AUTOSAR standard guide |

---

## 🎨 Customization

### Update Navigation
Edit `components/Navbar.tsx` to add/remove menu items.

### Add Social Links
Edit `components/Footer.tsx` in the `socialLinks` array.

### Change Colors
Edit `tailwind.config.ts` theme colors.

### Update Content
- Replace article placeholders in section pages
- Modify hero text in landing page
- Add real descriptions

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial EmbDev project"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repo
   - Click "Deploy"
   - ✅ Done! No configuration needed.

3. **Your site will be live at**: `https://embdev-[your-account].vercel.app`

### Deploy with Docker

```bash
docker build -t embdev .
docker run -p 3000:3000 embdev
```

---

## 💡 Tips

- **Hot Reload**: Changes auto-refresh in development mode
- **TypeScript**: Catch errors before deployment
- **SEO**: Metadata configured for search engines
- **Mobile**: Fully responsive on all devices
- **Performance**: Optimized for Vercel's infrastructure

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear build cache?
```bash
rm -rf .next
npm run build
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

---

## ✨ What's Next?

1. ✅ Project is ready to run locally
2. 📝 Add real content to section pages
3. 🎨 Customize branding and colors
4. 🔗 Update social media links
5. 🚀 Deploy to Vercel

---

**Happy coding! 🎉**
