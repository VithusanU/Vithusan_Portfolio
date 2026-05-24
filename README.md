# Vithusan Uruthirakumaran — Portfolio

Personal portfolio and case study site. Built to showcase product thinking, shipped projects, and the story behind the work — not just a list of links.

> **Live:** [vithusan-portfolio.vercel.app](https://vithusan-portfolio.vercel.app)

---

## What's Inside

| Section | Content |
|---------|---------|
| **Home** | Hero, featured project, latest blog posts |
| **Work** | Project case studies written as PM artifacts — problem, solution, decisions, learnings |
| **Blog** | Long-form writing on PM craft, building in public, and career transition |
| **About** | Background, work experience, skills |
| **Gallery** | Screenshots and app walkthroughs |

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Design system | Once UI |
| Content | MDX (blog posts and project case studies) |
| Fonts | Geist |
| Deployment | Vercel |

---

## Running Locally

```bash
git clone https://github.com/VithusanU/Vithusan_Portfolio.git
cd Vithusan_Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── work/
│   │   └── projects/         # Project case studies (.mdx)
│   ├── blog/
│   │   └── posts/            # Blog posts (.mdx)
│   └── gallery/              # Media gallery
├── components/               # Shared UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
└── resources/
    ├── content.tsx           # All site copy — edit this to personalise
    └── once-ui.config.ts     # Visual config (theme, effects, fonts, colours)
```

### Adding Content

- **New project:** create a `.mdx` file in `src/app/work/projects/`
- **New blog post:** create a `.mdx` file in `src/app/blog/posts/`
- **Update copy:** edit `src/resources/content.tsx`

---

## License

MIT

---

*Built by [Vithusan Uruthirakumaran](https://github.com/VithusanU)*
