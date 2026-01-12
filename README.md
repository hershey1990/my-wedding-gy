# My Wedding

A Preact + TypeScript + Tailwind CSS project, ready to deploy on Vercel.

## Tech Stack

- ⚡️ [Preact](https://preactjs.com/) - Fast 3kB alternative to React
- 🎨 [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🚀 [Vite](https://vitejs.dev/) - Next generation frontend tooling
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

Make sure you have Node.js and pnpm installed on your machine.

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
# Build for production
pnpm build
```

### Preview

```bash
# Preview production build
pnpm preview
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
pnpm add -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Click "Deploy"

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Project Structure

```
my-wedding-gy/
├── src/
│   ├── assets/          # Static assets
│   ├── index.tsx        # Main application component
│   └── style.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── vercel.json          # Vercel configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Tailwind CSS

The project uses Tailwind CSS v4. You can customize your styles in `src/style.css` by adding custom CSS after the Tailwind import.

### TypeScript

TypeScript configuration can be found in `tsconfig.json`.

## License

MIT
