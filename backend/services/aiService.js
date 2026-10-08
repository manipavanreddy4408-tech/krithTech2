import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const resumeContext = `
RESUME / PROFILE INFORMATION FOR MANIPAVAN

Name: Manipavan Reddy Chandhireddy
Preferred name: Manipavan

Education:
- VNR Vignana Jyothi Institute of Engineering and Technology
- B.Tech in Computer Science and Engineering (AI & ML)
- CGPA: 9.5
- Expected graduation: 2029
- Hyderabad

Technical Skills:
- C++, Java, Python, C
- Node.js, Express.js
- SQLite, Streamlit
- Git, GitHub, VS Code
- Data Structures and Algorithms
- Object Oriented Programming
- Problem Solving
- NumPy, Pandas
- Data cleaning, preprocessing and analysis
- CSV, JSON, DataFrames, indexing, filtering and sorting

Projects:

1. AI Dataset Intelligence Copilot
- AI-powered dataset quality auditing and automated cleaning platform.
- Covers dataset profiling, rule-based auditing, readiness scoring,
  AI decision making, automated fixes, cleaning-script generation
  and PDF reports.

2. PAIMANA — Infrastructure Project Intelligence
- Infrastructure intelligence system for historical project analysis.
- Processes PAIMANA Flash Report PDFs into structured historical data.
- Includes prediction of future delay deterioration, SHAP explanations
  and evidence retrieval through offline RAG.

3. Music Player
- C++ project demonstrating Data Structures and Algorithms concepts.

4. WebForge AI — Campus Resource Booking API
- Backend system for campus resource booking.
- Includes authentication, resource management, booking requests,
  approval/rejection, booking history, cancellation and overlap detection.
- Technologies: Node.js, Express.js, MongoDB, Mongoose, JWT and bcryptjs.
- Manipavan was a core technical contributor in the team project.

Coding Profiles:
- GitHub: https://github.com/manipavanreddy4408-tech
- LeetCode: https://leetcode.com/u/Manipavan_448/
- CodeChef: https://www.codechef.com/users/rapid_seren_61
- Codeforces: https://codeforces.com/profile/Manipavannn__

Coding Profile Details:
- LeetCode rating: 1450
- LeetCode contests: 3
- CodeChef rating: 1202
- CodeChef contests: 26

Achievements:
- Build by Sunset - ECHO 2026
- Smart India Hackathon 2026

Languages:
- English
- Telugu
- Hindi

Interests:
- Puzzle Solving
- Rubik's Cube
- Film & Cinema

Resume uniqueness:
- The resume combines AI/ML, data intelligence, backend development
  and Data Structures and Algorithms through practical projects rather
  than focusing on only one technical area.
- The project portfolio demonstrates a progression from DSA and C++
  to backend systems and then AI/data intelligence.
`;

// Tried in order. Any model that is overloaded (503), out of quota (429)
// or no longer available (404) is skipped and the next one is tried.
// You can override the list with GEMINI_MODELS="model-a,model-b" in .env
const DEFAULT_MODELS = [
  "gemini-flash-latest",
  "gemini-3.8-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
];

const MODELS = process.env.GEMINI_MODELS
  ? process.env.GEMINI_MODELS.split(",").map((m) => m.trim()).filter(Boolean)
  : DEFAULT_MODELS;

const ATTEMPTS_PER_MODEL = 2;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generatePortfolioResponse = async (message, portfolioContext) => {
  const apiKey =
    process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not loaded");
  }

  const ai = new GoogleGenAI({
    apiKey,
  });

  const prompt = `
You are the AI assistant for Manipavan Reddy Chandhireddy's portfolio.

Answer the user's question using ONLY the verified profile information
provided in the RESUME / PROFILE INFORMATION and PORTFOLIO sections below.

IMPORTANT RULES:

- The resume/profile information below is part of the portfolio knowledge.
- Never say that Manipavan's resume information is unavailable when the
  answer can be obtained from the provided resume/profile information.
- If the user asks what is unique about his resume, explain the distinctive
  combination of AI/ML, data intelligence, backend development and DSA,
  supported by his projects and skills.
- Do not invent information.
- Do not claim technologies, achievements, experience or responsibilities
  that are not listed.
- For team projects, do not imply that Manipavan worked alone unless the
  provided information explicitly says so.
- Be concise and natural.
- Use short paragraphs or bullet points when useful.
- If a question is genuinely outside the supplied information, say that the
  portfolio does not provide that information.

RESUME / PROFILE INFORMATION:
${resumeContext}

PORTFOLIO:
${JSON.stringify(portfolioContext, null, 2)}

USER QUESTION:
${message}
`;

  let lastError;

  for (const model of MODELS) {
    for (let attempt = 1; attempt <= ATTEMPTS_PER_MODEL; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
        });

        if (
          typeof response?.text === "string" &&
          response.text.trim()
        ) {
          return response.text.trim();
        }

        return "I couldn't generate a response from the profile data right now.";
      } catch (error) {
        lastError = error;
        const status = error?.status;

        console.error(
          `Gemini ${model} attempt ${attempt} failed:`,
          status
        );

        // 400/401/403 etc. won't be fixed by retrying or switching models
        const retryable =
          status === 503 ||
          status === 500 ||
          status === 429 ||
          status === 404;

        if (!retryable) {
          throw error;
        }

        // 429 = quota on this model, 404 = model retired/unavailable.
        // Retrying the same model is pointless, so go to the next one.
        if (status === 429 || status === 404) {
          break;
        }

        // Exponential backoff with a little jitter (~1s, ~2s)
        if (attempt < ATTEMPTS_PER_MODEL) {
          await sleep(1000 * 2 ** (attempt - 1) + Math.random() * 300);
        }
      }
    }
  }

  const quotaHit = lastError?.status === 429;

  const finalError = new Error(
    quotaHit
      ? "The AI assistant has temporarily reached its Gemini API quota. Please try again later."
      : "The AI assistant is very busy right now. Please try again in a moment."
  );

  finalError.status = quotaHit ? 429 : 503;

  throw finalError;
};

export { generatePortfolioResponse };