# Professional Marketing Portfolio

A two-page, Vercel-ready Next.js portfolio for a marketing class final project.

## Update portfolio content

All personalized writing, links, experience, skills, projects, and coursework
references are centralized in `src/content/portfolio.ts`.

The Target Market Persona is stored in `public/target-market-persona.png`. When
the professional photo is ready, place it in `public/` and update the `photo`
record in the content file with its path, alternative text, width, and height.
Normal YouTube share URLs and public Google Docs URLs are converted to embedded
views automatically.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate for submission

```bash
npm run lint
npm run build
```

After deploying to Vercel, open the public URL in a private browser window and
confirm the video, persona image, Google Doc, and LinkedIn footer link all work.
