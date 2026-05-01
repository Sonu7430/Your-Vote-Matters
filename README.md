# VoteVidya: Your Vote Matters

An interactive and easy-to-follow web application designed to help users understand the election process, timelines, and necessary steps to vote.

## Features
- **Interactive Timeline**: A step-by-step visual guide to the election phases.
- **Election Phase Durations**: A data-driven chart visualizing the time commitment for each stage.
- **AI Election Assistant**: A Gemini-powered chatbot to answer your specific voting queries.
- **FAQ Section**: Quick answers to common voter questions.
- **Interactive Roadmap**: Gamified voting journey with progress tracking.
- **3D Flipcards**: Learn election terminology with interactive cards.

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (Modern, Responsive, Dark Mode)
- **Charts**: Recharts
- **AI Integration**: Google Gemini API (@google/generative-ai)
- **Deployment**: Google Cloud Run (Containerized)

## Local Development
1. Clone the repository.
2. Run `npm install`.
3. Create a `.env.local` file and add your `VITE_GEMINI_API_KEY`.
4. Run `npm run dev`.

## Deployment
This project is configured for one-click deployment to Google Cloud Run using the included `Dockerfile` and `nginx.conf`.
