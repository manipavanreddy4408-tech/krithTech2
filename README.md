# krithTech2 — Round 2 Prototype

> A full-stack AI-powered portfolio prototype built with React, TypeScript, Vite, Node.js, and Express.

## Overview

**krithTech2** is the Round 2 prototype of the portfolio application. It combines a modern React frontend with an Express backend and an AI-powered chat assistant.

The prototype is designed to present profile information, showcase projects, and allow visitors to interact with an AI assistant through a clean portfolio interface.

## Highlights

- Modern responsive portfolio interface
- Profile and project information served through REST APIs
- AI-powered portfolio assistant
- React + TypeScript frontend
- Node.js + Express backend
- Environment-based API key configuration
- Clear separation between frontend, backend, routes, controllers, services, and data

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite, CSS |
| Backend | Node.js, Express.js |
| AI | Gemini / Google AI API |
| API | REST |
| Package Manager | npm |
| Development | VS Code |

## Architecture

```text
Visitor
   │
   ▼
React + TypeScript Frontend
   │
   ├── Profile
   ├── Projects
   └── AI Chat
   │
   ▼
Express REST API
   │
   ├── Routes
   ├── Controllers
   ├── Services
   └── Data
   │
   ▼
Gemini / Google AI API
```

## Project Structure

```text
krithTech2/
├── backend/
│   ├── controllers/
│   │   ├── chatController.js
│   │   ├── profileController.js
│   │   └── projectController.js
│   ├── data/
│   │   ├── portfolio.js
│   │   └── projects.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── routes/
│   │   ├── chatRoutes.js
│   │   ├── profileRoutes.js
│   │   └── projectRoutes.js
│   ├── services/
│   │   └── aiService.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

Verify your installation:

```bash
node -v
npm -v
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/manipavanreddy4408-tech/krithTech2.git
cd krithTech2
```

### 2. Configure the backend

```bash
cd backend
npm install
touch .env
```

Open `backend/.env` and add your API key:

```env
GEMINI_API_KEY=your_api_key_here
```

> **Security:** Never commit `.env` or expose your API key in source code. The repository already ignores `backend/.env`.

### 3. Start the backend

From `krithTech2/backend`:

```bash
node server.js
```

The backend runs at:

`http://localhost:5001`

Keep this terminal running.

### 4. Start the frontend

Open a second terminal:

```bash
cd krithTech2/frontend
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

Open that address in your browser.

## Quick Start

Run the backend in **Terminal 1**:

```bash
cd krithTech2/backend
npm install
node server.js
```

Run the frontend in **Terminal 2**:

```bash
cd krithTech2/frontend
npm install
npm run dev
```

Then open:

**http://localhost:5173/**

## Application Sections

### Home

The landing section introduces the portfolio and provides navigation to the main areas of the application.

**Primary actions**

- View Projects — navigates to the projects section
- Contact / Connect — navigates to the contact or connection area

### Profile

Displays the portfolio owner's profile information, including personal details, education, skills, and introduction.

**API:** `GET /api/profile`

### Projects

Displays the projects available in the portfolio, including project descriptions, technologies, and project links.

**API:** `GET /api/projects`

**Project actions**

- View Project — opens the selected project
- GitHub — opens the corresponding repository when available

### AI Assistant

The AI Assistant allows visitors to ask questions about the portfolio and receive responses through the configured AI service.

**Action**

- Send — sends the user's message to the backend AI endpoint

**API:** `POST /api/chat`

### AI Chat Flow

```text
User message
     ↓
Frontend Chat UI
     ↓
POST /api/chat
     ↓
Express Backend
     ↓
AI Service
     ↓
Gemini / Google AI API
     ↓
AI Response
     ↓
Frontend
```

## API Reference

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/profile` | Retrieve profile information |
| GET | `/api/projects` | Retrieve project information |
| POST | `/api/chat` | Send a message to the AI assistant |

### Test profile API

```bash
curl http://localhost:5001/api/profile
```

### Test projects API

```bash
curl http://localhost:5001/api/projects
```

### Chat request

```json
{
  "message": "Tell me about the projects"
}
```

## Backend Structure

The backend follows a simple layered structure:

```text
Routes
  ↓
Controllers
  ↓
Services / Data
  ↓
Response
```

- **Routes** — define API endpoints
- **Controllers** — handle requests and responses
- **Services** — handle AI-related processing
- **Data** — stores portfolio and project information
- **Middleware** — handles common backend errors

## Development Commands

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Local Endpoints

| Service | Address |
|---|---|
| Frontend | http://localhost:5173/ |
| Backend | http://localhost:5001/ |
| Profile API | http://localhost:5001/api/profile |
| Projects API | http://localhost:5001/api/projects |
| Chat API | http://localhost:5001/api/chat |

## Troubleshooting

### Port 5001 is already in use

Find the process:

```bash
lsof -i :5001
```

Stop it using its PID:

```bash
kill <PID>
```

Then restart the backend:

```bash
node server.js
```

### Dependencies are missing

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd frontend
npm install
```

### AI Assistant is not responding

1. Confirm the backend is running on port `5001`.
2. Check that `backend/.env` exists.
3. Confirm `GEMINI_API_KEY` is configured correctly.
4. Restart the backend after changing `.env`.

```bash
cd backend
node server.js
```

## Security

Never commit sensitive files or credentials.

The repository ignores:

```text
backend/.env
node_modules/
.DS_Store
```

Before committing changes, verify staged files:

```bash
git diff --cached --name-only
```

To specifically check for environment files or `node_modules`:

```bash
git diff --cached --name-only | grep -E '(^|/)(\.env|node_modules/)'
```

No output means those paths are not staged.

## Git Workflow

After making changes:

```bash
git status
git add .
git commit -m "Update portfolio project"
git push origin main
git status
```

A clean working tree should show:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## Developer

**Manipavan Reddy Chandhireddy**  
B.Tech CSE — Artificial Intelligence & Machine Learning  
VNR VJIET

## Repository

GitHub: `https://github.com/manipavanreddy4408-tech/krithTech2`

---

**krithTech2 · Round 2 Prototype**