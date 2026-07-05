# Global Ready AIEval

Learn, practice, qualify, and get hired for real-world AI evaluation, training, RLHF, and prompt engineering jobs with realistic simulations and scoring.

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` to your Gemini API key.
3. Run the app:
   `npm run dev`

## Stack

- [Next.js](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS v4
- Gemini API (`@google/genai`) for resume parsing via `app/api/parse-resume`
