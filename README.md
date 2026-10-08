# Manipavan Reddy Chandhireddy — Portfolio

An interactive personal portfolio prototype with a React frontend and an Express API. It presents a profile, learning journey, coding profiles, projects and achievements, and includes an AI chat assistant powered by the Google Gemini API.

## Sections

[Overview](#overview) · [Requirements](#requirements) · [Setup](#setup) · [Run locally](#run-locally) · [Buttons and interactions](#buttons-and-interactions) · [API](#api) · [Build and lint](#build-and-lint) · [Troubleshooting](#troubleshooting)

## Overview

- **Frontend:** React, TypeScript and Vite (`frontend/`)
- **Backend:** Node.js and Express (`backend/`)
- **AI chat:** Google Gemini API; requires a Gemini API key
- **Backend address:** `http://localhost:5001`
- **Frontend address:** Vite's local development URL, normally `http://localhost:5173`

## Requirements

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)
- A Google Gemini API key to use the AI chat

Check the installed versions:

```bash
node --version
npm --version
```

## Setup

Clone the repository and enter its root directory:

```bash
git clone https://github.com/manipavanreddy4408-tech/krithTech2.git
cd krithTech2
```

Install each app's dependencies from its lockfile:

```bash
cd backend
npm ci
cd ../frontend
npm ci
cd ..
```

Create the backend's local environment file:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and replace the placeholder with your own Gemini API key:

```dotenv
GEMINI_API_KEY=replace_with_your_gemini_api_key
```

Keep the real key private. `backend/.env` is ignored by Git; do not commit it or paste it into frontend code. The backend can also read `GOOGLE_API_KEY`. If `GEMINI_MODELS` is set, it overrides the built-in model fallback list; it is optional.

## Run locally

From the repository root, start the backend in **Terminal 1**:

```bash
cd backend
node server.js
```

From the repository root, start the frontend in **Terminal 2**:

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Keep both terminals running while using the prototype. The frontend's API calls expect the backend at `http://localhost:5001`.

### Optional API smoke checks

With the backend running, these commands check that the API is responding:

```bash
curl http://localhost:5001/
curl http://localhost:5001/api/profile
curl http://localhost:5001/api/projects
```

Test the AI endpoint (requires a valid Gemini API key):

```bash
curl -X POST http://localhost:5001/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"What projects are in this portfolio?"}'
```

## Buttons and interactions

The controls in each portfolio block are:

| Block | Button or control | Action |
| --- | --- | --- |
| Hero | **VIEW RESUME** | Opens the resume overlay and displays `frontend/public/Mani_resume.pdf`. |
| Hero | **EXPLORE WORK** | Scrolls to the Projects section. |
| Navigation | **JOURNEY**, **CODING**, **PROJECTS** | Jumps to the matching page section. |
| Journey | Timeline step buttons | Select a step and update the current-stage details. |
| Coding platforms | Profile cards | Opens the selected coding or social profile in a new tab. |
| Projects | Project cards | Opens a project case-study modal; use its close control to dismiss it. |
| Achievements | Achievement cards | Shows award information; these cards are informational, not clickable buttons. |
| AI chat | Floating **ASK ME / AI** button | Opens or closes the chat panel. |
| AI chat | **→** send button | Sends the typed question to the backend; it is disabled while a response is loading. |
| AI chat | **×** close button | Closes the chat panel. |
| Resume | **CLOSE ×** | Closes the resume overlay. |

## API

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Backend health message |
| `GET` | `/api/profile` | Portfolio profile information |
| `GET` | `/api/projects` | Portfolio projects |
| `POST` | `/api/chat` | Generate an AI response; JSON body must include a non-empty `message` |

## Build and lint

Run the frontend TypeScript check and production build:

```bash
cd frontend
npm run build
```

Run the frontend linter:

```bash
npm run lint
```

To serve the production build locally after building:

```bash
npm run preview
```

## Troubleshooting

- **Node/Vite engine error:** Install a supported Node.js version (20.19+ or 22.12+), then reinstall with `npm ci` in the relevant app directory.
- **Address already in use:** Stop the process using port `5001` or start the backend on a different port and update the frontend API URL in `frontend/src/App.tsx` to match.
- **AI chat returns an error:** Check that `backend/.env` contains a valid `GEMINI_API_KEY`, restart the backend after editing it, and verify that the key's Gemini API quota is available.
- **Resume does not load:** Confirm that `frontend/public/Mani_resume.pdf` exists.
