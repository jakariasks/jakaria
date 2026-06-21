# Jakaria Hasan — Personal Portfolio

A premium, dark-themed (with light mode) React + Vite portfolio for Jakaria Hasan — CSE student, full-stack web developer, and educator.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your real assets

Replace these placeholder files with your real ones (same filenames, same folders):

| What | Path |
|---|---|
| Professional portrait photo | `public/jakaria.jpeg` |
| JH logo (used in navbar, loading screen, footer) | `public/logoJH.png` |
| Favicon | `public/favicon.png` |
| Developer CV (PDF) | `public/Jakaria_Hasan_Developer_CV.pdf` |
| Teaching CV (PDF) | `public/Jakaria_Hasan_Teaching_CV.pdf` |

The placeholder images currently in `public/` are just stand-ins so the app runs without 404 errors — swap them out before deploying.

## 3. Run locally

```bash
npm run dev
```

Visit the printed local URL (usually `http://localhost:5173`).

## 4. Update content

All content lives in `src/data/*.js` — no need to touch component code to update text:

- `profileData.js` — name, tagline, hero text, bio, stats, social links, resume paths
- `educationData.js` — education timeline entries
- `skillsData.js` — skill categories and skill levels (Beginner / Comfortable / Improving / Learning)
- `teachingExperienceData.js` — teaching/mentoring experience cards
- `developerExperienceData.js` — developer journey / learning initiative cards
- `projectsData.js` — project cards (title, description, tech, status, links)
- `achievementsData.js` — achievements & activities
- `softSkillsData.js` — soft skill tags and languages

To add a new project, copy an existing object in `projectsData.js`'s `projects` array and edit the fields.

## 5. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## 6. Deploy on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Vite. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

Alternatively, with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- Theme preference (dark/light) is saved to `localStorage` automatically.
- The contact form is EmailJS-ready — to wire it up, install `@emailjs/browser` and call `emailjs.send(...)` inside `handleSubmit` in `src/components/Contact.jsx`. Until then it shows a friendly placeholder success message.
- No sensitive personal information (NID, DOB, address, family details, etc.) is included anywhere in this project, per the original brief.
