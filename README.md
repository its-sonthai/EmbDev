# EmbDev - Embedded Systems Knowledge Base

A modern, production-ready Next.js website for sharing knowledge about embedded systems, including Embedded Linux, RTOS, Android (AOSP/Automotive), and AUTOSAR.

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (dark theme optimized)
- **Deployment**: Vercel-ready (zero configuration)
- **Static Export**: Enabled for CDN deployment

## Project Structure

```
embdev/
├── app/
│   ├── layout.tsx           # Root layout with global styles
│   ├── page.tsx             # Landing page (/)
│   ├── globals.css          # Global Tailwind styles
│   ├── linux/
│   │   └── page.tsx         # /linux section
│   ├── rtos/
│   │   └── page.tsx         # /rtos section
│   ├── android/
│   │   └── page.tsx         # /android section
│   └── autosar/
│       └── page.tsx         # /autosar section
├── components/
│   ├── Navbar.tsx           # Header navigation
│   ├── Footer.tsx           # Footer with social links
│   └── SectionLayout.tsx    # Shared section page layout
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
└── README.md
```

## Features

✅ **Dark Theme** - Engineering-focused minimal design
✅ **Responsive** - Desktop-first, mobile-friendly
✅ **Type-Safe** - Full TypeScript support
✅ **SEO-Ready** - Metadata configuration for all pages
✅ **Scalable** - Easy to add new sections and blog posts
✅ **Performance** - Static generation, optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - No additional configuration needed!

### Static Export (Optional)

To enable static HTML export:

```typescript
// next.config.mjs
const nextConfig = {
  output: 'export',
};
```

Then build:
```bash
npm run build
```

The static site will be in the `out/` directory.

### Docker Deployment

```bash
docker build -t embdev .
docker run -p 3000:3000 embdev
```

## Content Management

Currently, content is managed as TypeScript/React components. To scale:

### Future Migration Paths

1. **MDX Support** - Add `@next/mdx` for markdown content
2. **CMS Integration** - Connect to Contentful, Sanity, or Strapi
3. **Database** - Add database queries for dynamic content

Each section page (`/linux`, `/rtos`, etc.) is self-contained and can be independently updated.

## Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Add any required environment variables here
```

### Tailwind CSS

Dark theme is configured in `tailwind.config.ts`. Customize colors and spacing as needed.

## Performance Tips

- Pages are pre-rendered at build time (static generation)
- Images should be optimized using Next.js `<Image>` component
- Use `<Link>` for navigation between pages
- CSS is tree-shaken at build time (only used styles included)

## SEO

Metadata is configured in each page using Next.js metadata API. Update `app/layout.tsx` and individual page files to customize:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines',
};
```

## Development Workflow

### Adding a New Section

1. Create directory: `app/newsection/`
2. Add `page.tsx` with content
3. Update navigation in `components/Navbar.tsx`
4. Add metadata in the new page

### Adding Blog Posts

Each section can contain blog posts. Structure example:

```
app/linux/
├── page.tsx          # Section overview
├── kernel-module/
│   └── page.tsx      # Blog post
└── device-drivers/
    └── page.tsx      # Another blog post
```

## Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended config
- **Prettier** (optional): Configure as needed

Run linter:
```bash
npm run lint
```

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Clear build cache
```bash
rm -rf .next
npm run build
```

### Module not found errors
Ensure `@/*` alias in `tsconfig.json` matches your file structure.

## License

MIT

## Contact

- **LinkedIn**: [Your Profile]
- **GitHub**: [Your Profile]
- **Email**: [Your Email]

---

Built with ❤️ for embedded systems engineers. Happy learning!
