import { useEffect, useState, type KeyboardEvent } from "react";
import "./App.css";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge: string;
  github?: string;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const journey = [
  {
    number: "01",
    year: "FOUNDATION",
    title: "C",
    description:
      "My starting point in programming, logic and understanding how software works underneath.",
  },
  {
    number: "02",
    year: "STRUCTURES",
    title: "C++",
    description:
      "Moving into object-oriented programming, reusable structures and stronger problem solving.",
  },
  {
    number: "03",
    year: "EXPLORATION",
    title: "Python",
    description:
      "A faster path into scripting, data, automation and artificial intelligence.",
  },
  {
    number: "04",
    year: "THINKING",
    title: "DSA",
    description:
      "Learning to approach problems through algorithms, data structures and complexity.",
  },
  {
    number: "05",
    year: "INTERACTION",
    title: "Web",
    description:
      "Turning technical ideas into interfaces, APIs and applications people can actually use.",
  },
  {
    number: "06",
    year: "INTELLIGENCE",
    title: "AI",
    description:
      "Exploring machine learning, intelligent systems, RAG and AI-powered applications.",
  },
];

const platforms = [
  {
    number: "01",
    name: "CodeChef",
    handle: "rapid_seren_61",
    role: "CONTESTS",
    stat: "26 CONTESTS",
    image: "/platforms/codechef.jpeg",
    url: "https://www.codechef.com/users/rapid_seren_61",
  },
  {
    number: "02",
    name: "LeetCode",
    handle: "Manipavan_448",
    role: "DAILY PRACTICE",
    stat: "1450 RATING",
    image: "/platforms/leetcode.jpeg",
    url: "https://leetcode.com/u/Manipavan_448/",
  },
  {
    number: "03",
    name: "Codeforces",
    handle: "Manipavannn__",
    role: "COMPETITIVE",
    stat: "CONTESTS",
    image: "/platforms/codeforces.jpeg",
    url: "https://codeforces.com/profile/Manipavannn__",
  },
  {
    number: "04",
    name: "GitHub",
    handle: "manipavanreddy4408-tech",
    role: "PROJECTS",
    stat: "OPEN SOURCE",
    image: "/platforms/github.jpeg",
    url: "https://github.com/manipavanreddy4408-tech",
  },
  {
    number: "05",
    name: "LinkedIn",
    handle: "manipavan-reddy-chandhireddy",
    role: "PROFESSIONAL",
    stat: "JOURNEY",
    image: "/platforms/linkedin.jpeg",
    url: "https://www.linkedin.com/in/manipavan-reddy-chandhireddy-5876a638/",
  },
];

const projects: Project[] = [
  {
    number: "01",
    title: "WebForge AI",
    subtitle: "Campus Resource Booking API",
    badge: "HACKATHON WINNER",
    description:
      "A backend system for authenticated campus resource booking with role-based access, approval workflows, availability management and booking conflict detection.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    github:
      "https://github.com/manipavanreddy4408-tech/WebForge-AI",
  },
  {
    number: "02",
    title: "AI Dataset Intelligence Copilot",
    subtitle: "AI for Builders",
    badge: "AI SYSTEM",
    description:
      "An AI-powered dataset quality auditing and automated cleaning platform that analyzes datasets, calculates readiness, recommends fixes, generates cleaned data and produces reports.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Pandas",
      "NumPy",
      "SQLite",
      "DeepSeek",
    ],
    github:
      "https://github.com/manipavanreddy4408-tech/AI-Dataset-Intelligence-Copilot",
  },
  {
    number: "03",
    title: "PAIMANA",
    subtitle: "Infrastructure Project Intelligence",
    badge: "SIH 2026",
    description:
      "An infrastructure intelligence system that transforms monthly PAIMANA Flash Report PDFs into validated historical project data, predicts future delay deterioration, explains risk using SHAP and retrieves supporting evidence through offline RAG.",
    tech: [
      "Python",
      "Streamlit",
      "SQLite",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "ChromaDB",
      "Ollama",
      "Docker",
    ],
  },
];

const achievements = [
  {
    number: "01",
    tag: "HACKATHON WINNER",
    title: "WebForge AI",
    description:
      "Won the hackathon with a campus resource booking API featuring role-based access, approval workflows and conflict detection.",
    stat: "MIDNIGHT SONS",
    tone: "gold",
  },
  {
    number: "02",
    tag: "ENTRANCE EXAM",
    title: "JEE Main",
    description:
      "Scored a 97.2 percentile in JEE Main.",
    stat: "97.2 PERCENTILE",
    tone: "plain",
  },
  {
    number: "03",
    tag: "ENTRANCE EXAM",
    title: "EAMCET",
    description:
      "Secured a rank of 1987 in EAMCET.",
    stat: "RANK 1987",
    tone: "plain",
  },
];

function App() {
  const [activeJourney, setActiveJourney] = useState(3);
  const [activePlatform, setActivePlatform] = useState(0);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey. I'm Manipavan's AI profile assistant. Ask me about his projects, technologies, coding profiles or resume.",
    },
  ]);

  useEffect(() => {
    const root = document.documentElement;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointer = (event: PointerEvent) => {
      targetX =
        (event.clientX / window.innerWidth - 0.5) * 2;

      targetY =
        (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const animatePointer = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      root.style.setProperty(
        "--mx",
        currentX.toFixed(4)
      );

      root.style.setProperty(
        "--my",
        currentY.toFixed(4)
      );

      requestAnimationFrame(animatePointer);
    };

    window.addEventListener(
      "pointermove",
      handlePointer
    );

    animatePointer();

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointer
      );
    };
  }, []);

  useEffect(() => {
    const updateHero = () => {
      const maxScroll =
        window.innerHeight * 0.95;

      const progress = Math.min(
        Math.max(window.scrollY / maxScroll, 0),
        1
      );

      document.documentElement.style.setProperty(
        "--hero-progress",
        progress.toFixed(4)
      );
    };

    updateHero();

    window.addEventListener(
      "scroll",
      updateHero,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateHero
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateHero
      );

      window.removeEventListener(
        "resize",
        updateHero
      );
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      "resume-active",
      resumeOpen
    );

    return () => {
      document.body.classList.remove(
        "resume-active"
      );
    };
  }, [resumeOpen]);

  const sendMessage = async () => {
    const trimmed = message.trim();

    if (!trimmed || loading) return;

    setChatMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: trimmed,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5001/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      setChatMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            data.reply ||
            data.message ||
            "I couldn't generate a response right now.",
        },
      ]);
    } catch {
      setChatMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "The profile AI is currently offline. Make sure the backend is running on port 5001.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleChatKey = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <main className="portfolio">
      <div className="ambient-light" />

      {/* NAVIGATION */}

      <nav className="nav">
        <div className="nav-links">
          <a href="#journey">JOURNEY</a>
          <a href="#coding">CODING</a>
          <a href="#projects">PROJECTS</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-sticky">
          <div className="hero-image">
            <img
              src="/hero-mountain.jpg"
              alt=""
            />
          </div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span />
                PORTFOLIO / 2026
              </div>

              <h1>
                <span>Hey, I’m</span>
                <strong>Manipavan</strong>
              </h1>

              <p>
                B.Tech CSE × AIML
                <br />
                Curious about software, intelligent
                systems and the space between an idea
                and something that actually works.
              </p>

              <div className="hero-actions">
                <button
                  onClick={() =>
                    setResumeOpen(true)
                  }
                >
                  VIEW RESUME
                  <b>↗</b>
                </button>

                <a href="#projects">
                  EXPLORE WORK
                  <b>↓</b>
                </a>
              </div>
            </div>

            <div className="hero-scroll">
              <span>SCROLL</span>
              <i />
            </div>
          </div>

          <div className="hero-meta">
            <span>01</span>
            <span>MANIPAVAN</span>
            <span>INDIA</span>
          </div>
        </div>
      </section>

      {/* JOURNEY */}

      <section
        id="journey"
        className="section journey"
      >
        <div className="section-heading">
          <div>
            <small>01</small>
            <h2>
              THE
              <br />
              JOURNEY
            </h2>
          </div>

          <p>
            From programming fundamentals to
            intelligent systems.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="timeline-track">
            <svg
              className="timeline-path"
              viewBox="0 0 1000 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 55 110 C 105 30, 175 30, 220 150 S 335 235, 390 110 S 505 30, 555 150 S 670 235, 725 110 S 840 30, 945 150"
              />
            </svg>

            {journey.map((item, index) => {
              const positions = [
                { left: "5.5%", top: "30%" },
                { left: "22%", top: "61%" },
                { left: "39%", top: "30%" },
                { left: "55.5%", top: "61%" },
                { left: "72.5%", top: "30%" },
                { left: "94%", top: "61%" },
              ];

              return (
                <button
                  key={item.number}
                  className={`timeline-node ${
                    activeJourney === index ? "active" : ""
                  } ${
                    index % 2 === 0 ? "node-top" : "node-bottom"
                  }`}
                  style={positions[index]}
                  onMouseEnter={() => setActiveJourney(index)}
                  onFocus={() => setActiveJourney(index)}
                  onClick={() => setActiveJourney(index)}
                >
                  <span className="timeline-copy">
                    <small>{item.year}</small>
                    <strong>{item.title}</strong>
                    <em>{item.description}</em>
                  </span>

                  <span className="timeline-circle">
                    <b>STEP</b>
                    <strong>{item.number}</strong>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="timeline-footer">
            <div>
              <small>CURRENT STAGE</small>
              <strong>{journey[activeJourney].title}</strong>
              <span>{journey[activeJourney].description}</span>
            </div>

            <div className="timeline-counter">
              <span>0{activeJourney + 1}</span>
              <i>/</i>
              <span>06</span>
            </div>
          </div>
        </div>
      </section>

      {/* CODING */}

      <section
        id="coding"
        className="section coding"
      >
        <div className="section-heading compact-heading">
          <div>
            <small>02 / CODING</small>
            <h2>
              CODING
              <br />
              PLATFORMS
            </h2>
          </div>

          <p>
            Where I practice, compete, build and document what I'm learning.
          </p>
        </div>

        <div className="coding-box coding-network">
          <div className="coding-top">
            <span>● ● ●</span>
            <strong>MANIPAVAN / CODING PROFILES</strong>
            <span>05 / 05</span>
          </div>

          <div className="profile-row profile-row-top">
            {platforms.slice(0, 3).map((platform, index) => (
              <button
                key={platform.name}
                className={`profile-card ${activePlatform === index ? "active" : ""}`}
                onMouseEnter={() => setActivePlatform(index)}
                onClick={() => window.open(platform.url, "_blank", "noopener,noreferrer")}
              >
                <span className="profile-number">{platform.number}</span>
                <img src={platform.image} alt="" />
                <div className="profile-card-overlay" />
                <div className="profile-card-content">
                  <small>{platform.role}</small>
                  <strong>{platform.name}</strong>
                  <span>{platform.stat}</span>
                </div>
                <i>↗</i>
              </button>
            ))}
          </div>

          <div className="turing-bridge">
            <div className="bridge-line" />
            <div className="turing-node">
              <img src="/platforms/turinghut.png" alt="Turing Hut" />
              <div>
                <small>VNRVJIET / CODING COMMUNITY</small>
                <strong>TURING HUT</strong>
              </div>
              <b>↗</b>
            </div>
            <div className="bridge-line" />
          </div>

          <div className="profile-row profile-row-bottom">
            {platforms.slice(3).map((platform, offset) => {
              const index = offset + 3;
              return (
                <button
                  key={platform.name}
                  className={`profile-card ${activePlatform === index ? "active" : ""}`}
                  onMouseEnter={() => setActivePlatform(index)}
                  onClick={() => window.open(platform.url, "_blank", "noopener,noreferrer")}
                >
                  <span className="profile-number">{platform.number}</span>
                  <img src={platform.image} alt="" />
                  <div className="profile-card-overlay" />
                  <div className="profile-card-content">
                    <small>{platform.role}</small>
                    <strong>{platform.name}</strong>
                    <span>{platform.stat}</span>
                  </div>
                  <i>↗</i>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section section-projects"
      >
        <div className="projects-intro">
          <div>
            <small>03 / SELECTED WORK</small>
            <h2>PROJECTS</h2>
          </div>

          <p>
            Systems, experiments and applications
            built while moving from code to intelligent systems.
          </p>
        </div>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-panel project-panel-${index + 1}`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="project-panel-head">
                <span>{project.number}</span>

                <span
                  className={`project-badge ${
                    project.title === "WebForge AI"
                      ? "project-badge-winner"
                      : project.title === "PAIMANA"
                        ? "project-badge-sih"
                        : ""
                  }`}
                >
                  {project.title === "WebForge AI" && <b>✦</b>}
                  {project.badge}
                </span>
              </div>

              <div className="project-panel-body">
                <div className="project-identity">
                  <small>0{index + 1} / SYSTEM</small>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>

                  {index === 0 && (
                    <div className="winner-line">
                      <span>🏆</span>
                      <strong>HACKATHON WINNER</strong>
                      <em>MIDNIGHT SONS</em>
                    </div>
                  )}
                </div>

                <div
                  className={`project-art project-art-new ${
                    index === 0 ? "project-art-winner" : ""
                  }`}
                  aria-hidden="true"
                >
                  {index === 0 && (
                    <>
                      <div className="winner-stamp">
                        <span className="winner-stamp-star">✦</span>
                        <div>
                          <strong>HACKATHON</strong>
                          <strong>WINNER</strong>
                        </div>
                        <small>MIDNIGHT SONS</small>
                      </div>

                      <div className="forge-core"><span>API</span></div>
                      <i className="forge-orbit forge-orbit-a" />
                      <i className="forge-orbit forge-orbit-b" />
                      <i className="forge-node node-a" />
                      <i className="forge-node node-b" />
                      <i className="forge-node node-c" />
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <div className="paimana-core"><span>AI</span></div>
                      <i className="paimana-ring ring-one" />
                      <i className="paimana-ring ring-two" />
                      <i className="paimana-ring ring-three" />
                      <span className="data-point dp-one" />
                      <span className="data-point dp-two" />
                      <span className="data-point dp-three" />
                      <span className="data-point dp-four" />
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <div className="dataset-window">
                        <span>CSV</span>
                        <div className="dataset-lines">
                          <i /><i /><i /><i /><i />
                        </div>
                      </div>
                      <div className="dataset-scan" />
                      <span className="dataset-dot dataset-dot-a" />
                      <span className="dataset-dot dataset-dot-b" />
                      <span className="dataset-dot dataset-dot-c" />
                    </>
                  )}
                </div>

                <div className="project-details">
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.slice(0, 6).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-open">
                    <span>OPEN CASE STUDY</span>
                    <b>↗</b>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section
        id="achievements"
        className="section achievements"
      >
        <div className="achievements-intro">
          <div>
            <small>04 / RECOGNITION</small>
            <h2>ACHIEVEMENTS</h2>
          </div>

          <p>
            Wins, competitions and milestones
            collected along the way.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article
              key={item.number}
              className={`achievement-card achievement-${item.tone}`}
            >
              <div className="achievement-top">
                <span>{item.number}</span>
                <em>{item.tag}</em>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <b>{item.stat}</b>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div>
          <span>B.TECH CSE × AIML</span>
          <span>2026</span>
          <span>INDIA</span>
        </div>
      </footer>

      {/* AI */}

      <button
        className={`ai-orb ${
          chatOpen ? "open" : ""
        }`}
        onClick={() =>
          setChatOpen(
            (value) => !value
          )
        }
      >
        <span className="ai-orbit one" />
        <span className="ai-orbit two" />
        <span className="ai-orbit three" />

        <strong>AI</strong>

        <small>ASK ME</small>
      </button>

      {chatOpen && (
        <div className="chat">
          <div className="chat-header">
            <div>
              <small>
                MANIPAVAN / AI
              </small>

              <h3>Ask anything.</h3>
            </div>

            <button
              onClick={() =>
                setChatOpen(false)
              }
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {chatMessages.map(
              (item, index) => (
                <div
                  key={index}
                  className={
                    item.role
                  }
                >
                  {item.content}
                </div>
              )
            )}

            {loading && (
              <div className="assistant typing">
                • • •
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              value={message}
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
              }
              onKeyDown={handleChatKey}
              placeholder="Ask about Manipavan..."
            />

            <button
              onClick={() =>
                void sendMessage()
              }
              disabled={loading}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}

      {selectedProject && (
        <div
          className="modal"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="modal-card"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ×
            </button>

            <small>
              PROJECT /{" "}
              {
                selectedProject.number
              }
            </small>

            <h2>
              {
                selectedProject.title
              }
            </h2>

            <h3>
              {
                selectedProject.subtitle
              }
            </h3>

            <p>
              {
                selectedProject.description
              }
            </p>

            <div className="modal-tech">
              {selectedProject.tech.map(
                (item) => (
                  <span key={item}>
                    {item}
                  </span>
                )
              )}
            </div>

            {selectedProject.github && (
              <a
                href={
                  selectedProject.github
                }
                target="_blank"
                rel="noreferrer"
              >
                VIEW GITHUB ↗
              </a>
            )}
          </div>
        </div>
      )}

      {/* RESUME */}

      {resumeOpen && (
        <div className="resume">
          <button
            className="resume-close"
            onClick={() =>
              setResumeOpen(false)
            }
          >
            CLOSE ×
          </button>

          <div className="resume-heading">
            <small>
              MANIPAVAN / 2026
            </small>

            <h2>RESUME</h2>
          </div>

          <div className="resume-frame">
            <iframe
              src="/Mani_resume.pdf"
              title="Manipavan Resume"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;