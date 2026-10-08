krithTech2

A full-stack portfolio prototype built with React + TypeScript + Vite on the frontend and Node.js + Express on the backend.

The project provides a personal portfolio interface with profile information, projects, and an AI-powered chat feature.

⸻

🚀 Features

* 👤 Personal profile section
* 💻 Projects showcase
* 🤖 AI-powered chat assistant
* 📂 Portfolio/project information
* 📱 Responsive frontend
* ⚡ Fast Vite development server
* 🔐 Environment-variable based API key configuration
* 🌐 REST API using Express.js
* 🧩 Separate frontend and backend architecture

⸻

🛠️ Tech Stack

Frontend

* React
* TypeScript
* Vite
* CSS
* ESLint

Backend

* Node.js
* Express.js
* REST API
* Gemini/Google AI API

⸻

📁 Project Structure

krithTech2/
│
├── backend/
│   ├── controllers/
│   │   ├── chatController.js
│   │   ├── profileController.js
│   │   └── projectController.js
│   │
│   ├── data/
│   │   ├── portfolio.js
│   │   └── projects.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── routes/
│   │   ├── chatRoutes.js
│   │   ├── profileRoutes.js
│   │   └── projectRoutes.js
│   │
│   ├── services/
│   │   └── aiService.js
│   │
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

⸻

⚙️ Requirements

Before running the project, install:

* Node.js
* npm
* Git

Check whether they are installed:

node -v
npm -v
git --version

⸻

📥 1. Clone the Repository

Clone the repository:

git clone https://github.com/manipavanreddy4408-tech/krithTech2.git

Move into the project:

cd krithTech2

⸻

🔧 2. Backend Setup

Open the backend folder:

cd backend

Install backend dependencies:

npm install

⸻

🔐 3. Configure Environment Variables

Inside the backend folder, create a .env file:

touch .env

Add your API key to the .env file.

Example:

GEMINI_API_KEY=your_api_key_here

Replace:

your_api_key_here

with your actual API key.

⚠️ Important

Never upload .env to GitHub.

The project already contains .gitignore rules for:

backend/.env
node_modules/
.DS_Store

Your API key should remain only on your local machine.

⸻

▶️ 4. Start the Backend

From the backend directory:

node server.js

You should see something similar to:

Server running on http://localhost:5001

The backend will run on:

http://localhost:5001

Keep this terminal running.

⸻

🎨 5. Start the Frontend

Open a new terminal window.

Go to the project:

cd krithTech2

Then enter the frontend:

cd frontend

Install dependencies:

npm install

Start the Vite development server:

npm run dev

You should see something similar to:

Local: http://localhost:5173/

Open this address in your browser:

http://localhost:5173/

⸻

🚀 Quick Start

After cloning the repository, use these commands.

Terminal 1 — Backend

cd krithTech2/backend
npm install
node server.js

Terminal 2 — Frontend

cd krithTech2/frontend
npm install
npm run dev

Then open:

http://localhost:5173/

⸻

🖥️ Application Blocks & Buttons

The portfolio is divided into multiple interactive sections.

🏠 Home / Hero Block

The main landing section introduces the portfolio.

Buttons

View Projects

Opens/navigates to the projects section where the available projects are displayed.

Let’s Connect / Contact

Navigates to the contact or connection section.

⸻

👤 Profile Block

Displays personal information and profile details.

Typical information includes:

* Name
* Role
* Skills
* Education
* Short introduction

Profile button

View Profile

Displays the complete profile information retrieved from the backend.

Backend endpoint:

GET /api/profile

⸻

💻 Projects Block

Displays the projects included in the portfolio.

Each project can contain:

* Project name
* Description
* Technologies used
* Project links
* Project details

Project buttons

View Project

Opens the selected project’s details or external project page.

GitHub

Opens the corresponding GitHub repository when available.

Backend endpoint:

GET /api/projects

⸻

🤖 AI Chat Block

The AI chat section allows the user to interact with the portfolio’s AI assistant.

The assistant can answer questions related to the portfolio and the information provided by the application.

Chat buttons

Send

Sends the entered message to the backend AI service.

The frontend sends the request to:

POST /api/chat

The backend processes the request and communicates with the configured AI service.

Chat flow

User
  ↓
Frontend Chat UI
  ↓
POST /api/chat
  ↓
Express Backend
  ↓
AI Service
  ↓
AI Response
  ↓
Frontend

⸻

🔌 Backend API

The backend provides REST API endpoints for the frontend.

Profile API

Get profile

GET /api/profile

Example:

curl http://localhost:5001/api/profile

⸻

Projects API

Get projects

GET /api/projects

Example:

curl http://localhost:5001/api/projects

⸻

Chat API

Send a message

POST /api/chat

The frontend sends the user’s message to the backend, which processes it through the AI service.

Example request:

{
  "message": "Tell me about the projects"
}

⸻

🧠 Backend Architecture

The backend follows a simple separation of responsibilities.

Request
   ↓
Routes
   ↓
Controllers
   ↓
Services / Data
   ↓
Response

Routes

Routes define the API endpoints.

backend/routes/

Controllers

Controllers handle incoming requests and responses.

backend/controllers/

Services

AI-related processing is handled inside:

backend/services/

Data

Portfolio and project information is maintained inside:

backend/data/

⸻

📦 Installing Dependencies

If dependencies are missing, run:

Backend

cd backend
npm install

Frontend

cd frontend
npm install

⸻

🧪 Development Commands

Backend

Start backend:

node server.js

Install dependencies:

npm install

⸻

Frontend

Start development server:

npm run dev

Install dependencies:

npm install

Build frontend:

npm run build

Preview production build:

npm run preview

⸻

🔄 Complete Restart

If you close everything and want to start the project again:

Terminal 1

cd krithTech2/backend
node server.js

Terminal 2

cd krithTech2/frontend
npm run dev

Then visit:

http://localhost:5173/

⸻

🐛 Troubleshooting

Backend does not start

Check Node.js:

node -v

Reinstall dependencies:

cd backend
npm install

Then:

node server.js

⸻

Frontend does not start

Run:

cd frontend
npm install

Then:

npm run dev

⸻

Port 5001 is already in use

Find the process:

lsof -i :5001

Stop the process:

kill <PID>

Then restart:

node server.js

⸻

AI chat is not responding

First check that the backend is running:

http://localhost:5001

Then check your .env file:

backend/.env

Make sure your API key is present and valid.

Restart the backend after changing .env:

node server.js

⸻

Cannot find module

Reinstall dependencies:

npm install

If the problem occurs in the backend:

cd backend
npm install

If it occurs in the frontend:

cd frontend
npm install

⸻

🔒 Security

The following files/directories must not be committed:

.env
node_modules/
.DS_Store

Never hardcode an API key inside JavaScript or TypeScript files.

Use:

GEMINI_API_KEY=your_api_key_here

instead.

If an API key is accidentally exposed, revoke/rotate the key immediately.

⸻

🌿 Git Workflow

After making changes to the project:

Check the current status:

git status

Add the changes:

git add .

Create a commit:

git commit -m "Update portfolio project"

Push to GitHub:

git push origin main

Check status:

git status

Expected result:

Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean

⸻

🔍 Check What Will Be Committed

Before committing, you can check staged files:

git diff --cached --name-only

Make sure files such as:

backend/.env
node_modules/

do not appear.

You can specifically check:

git diff --cached --name-only | grep -E '(^|/)(\.env|node_modules/)'

If there is no output, those files are not staged.

⸻

📌 Important Commands — Quick Reference

Purpose	Command
Clone repository	git clone <repository-url>
Enter project	cd krithTech2
Install backend	cd backend && npm install
Start backend	node server.js
Install frontend	cd frontend && npm install
Start frontend	npm run dev
Build frontend	npm run build
Check Git status	git status
Stage changes	git add .
Commit changes	git commit -m "message"
Push changes	git push origin main
Check staged files	git diff --cached --name-only
Check port 5001	lsof -i :5001

⸻

🌐 Local URLs

Service	URL
Frontend	http://localhost:5173/
Backend	http://localhost:5001/
Profile API	http://localhost:5001/api/profile
Projects API	http://localhost:5001/api/projects
Chat API	http://localhost:5001/api/chat

⸻

👨‍💻 Developer

Manipavan Reddy Chandhireddy

B.Tech CSE – Artificial Intelligence & Machine Learning

VNR VJIET

⸻

⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

⸻