# Abdelhamed Nada — Portfolio

A personal portfolio built with Next.js and React. It brings together a profile, experience, selected projects, and contact details in one responsive site.

## What’s inside

- Profile, experience, and technology sections
- Project directory with individual case-study pages and image galleries
- Responsive navigation and motion effects, with reduced-motion support
- Contact form endpoint and an optional streaming AI assistant
- Local project images, icons, and font files

The project descriptions and their shared data are maintained in `lib/projects.ts`.

## Tech stack

- Next.js 16, React 19, and TypeScript
- Tailwind CSS 4
- Motion

## Run locally

**Requirements:** Node.js 20.9 or newer and npm.

```bash
git clone <repository-url>
cd <repository-directory>
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run a production build:

```bash
npm run build
npm run start
```

## Configuration

The site can run locally without external service credentials. Add values to `.env.local` only for the features that need them:

| Variable | Used for | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_URL` | Override the canonical site URL used by metadata, `robots.txt`, and the sitemap; defaults to `https://abdelhamed-nada.vercel.app` | Only when using a different domain |
| `NVIDIA_APIKEY` or `NVIDIA_API_KEY` | NVIDIA API key for the chat assistant | Only for the assistant |
| `NVIDIA_MODEL` | Optional model override; defaults to `nvidia/nemotron-3-super-120b-a12b` | No |
| `EMAIL_USER` | Gmail account used by the contact endpoint | Only for email delivery |
| `EMAIL_PASS` | Gmail app password used by the contact endpoint | Only for email delivery |

Keep real credentials in your local environment or deployment provider—never commit them to the repository.

## Project layout

```text
app/                 Pages, layouts, and API routes
components/          Shared interface components
lib/projects.ts      Project content
public/images/       Project imagery
public/icons/        Technology and interface icons
styles/              Global styles
licenses/            Third-party license notices
```

## Rights and third-party notices

The personal content, CV, logo, project presentation material, and original contributions are covered by the rights notice in `LICENSE`. That notice does not grant a blanket license to reuse those materials. Third-party materials retain their own terms; see `licenses/portfolio-template-MIT.txt` and `public/fonts/OFL.txt`, as well as the licenses of the listed dependencies.
