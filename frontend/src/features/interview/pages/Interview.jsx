import React, { useState } from "react";
import '../style/interview.scss'

/* ── Navigation Items ── */
const NAV_ITEMS = [
  { id: "technical", label: "Technical Questions" },
  { id: "behavioral", label: "Behavioral Questions" },
  { id: "roadmap", label: "Road Map" },
];

/* ── Dummy Data (UI Only) ── */
const DUMMY_REPORT = {
  matchScore: 78,
  technicalQuestions: [
    {
      question: "Explain React Virtual DOM.",
      intention: "Check understanding of React rendering process.",
      answer:
        "Virtual DOM is a lightweight copy of the real DOM. React updates it first and then efficiently updates the real DOM using diffing.",
    },
    {
      question: "What is JWT?",
      intention: "Test authentication knowledge.",
      answer:
        "JWT is a compact token-based authentication method used to securely transmit information between client and server.",
    },
  ],
  behavioralQuestions: [
    {
      question: "Describe a challenging project you worked on.",
      intention: "Evaluate problem-solving and ownership.",
      answer:
        "Use the STAR method to explain situation, task, action, and result clearly.",
    },
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "React & Hooks",
      tasks: ["Revise useState/useEffect", "Build mini project"],
    },
    {
      day: 2,
      focus: "DSA Practice",
      tasks: ["Solve 5 array problems", "Practice recursion"],
    },
  ],
  skillGaps: [
    { skill: "System Design", severity: "high" },
    { skill: "TypeScript", severity: "mid" },
  ],
};

/* ── Question Card ── */
const QuestionCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="q-card">
      <div className="q-card__header" onClick={() => setOpen(!open)}>
        <span className="q-card__index">Q{index + 1}</span>
        <p className="q-card__question">{item.question}</p>
      </div>

      {open && (
        <div className="q-card__body">
          <div className="q-card__section">
            <strong>Intention:</strong>
            <p>{item.intention}</p>
          </div>
          <div className="q-card__section">
            <strong>Model Answer:</strong>
            <p>{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Roadmap Card ── */
const RoadMapDay = ({ day }) => (
  <div className="roadmap-day">
    <h3>Day {day.day} - {day.focus}</h3>
    <ul>
      {day.tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  </div>
);

/* ── Main Component ── */
const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical");
  const report = DUMMY_REPORT;

  const scoreColor =
    report.matchScore >= 80
      ? "score--high"
      : report.matchScore >= 60
      ? "score--mid"
      : "score--low";

  return (
    <div className="interview-page">
      <div className="interview-layout">

        {/* Left Navigation */}
        <nav className="interview-nav">
          <p className="interview-nav__label">Sections</p>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`interview-nav__item ${
                activeNav === item.id ? "interview-nav__item--active" : ""
              }`}
              onClick={() => setActiveNav(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button className="button primary-button">
            Download Resume
          </button>
        </nav>

        <div className="interview-divider" />

        {/* Center Content */}
        <main className="interview-content">
          {activeNav === "technical" && (
            <>
              <h2>Technical Questions</h2>
              {report.technicalQuestions.map((q, i) => (
                <QuestionCard key={i} item={q} index={i} />
              ))}
            </>
          )}

          {activeNav === "behavioral" && (
            <>
              <h2>Behavioral Questions</h2>
              {report.behavioralQuestions.map((q, i) => (
                <QuestionCard key={i} item={q} index={i} />
              ))}
            </>
          )}

          {activeNav === "roadmap" && (
            <>
              <h2>Preparation Road Map</h2>
              {report.preparationPlan.map((day) => (
                <RoadMapDay key={day.day} day={day} />
              ))}
            </>
          )}
        </main>

        <div className="interview-divider" />

        {/* Right Sidebar */}
        <aside className="interview-sidebar">
          <div className="match-score">
            <p>Match Score</p>
            <div className={`match-score__ring ${scoreColor}`}>
              {report.matchScore}%
            </div>
          </div>

          <div className="skill-gaps">
            <p>Skill Gaps</p>
            {report.skillGaps.map((gap, i) => (
              <span key={i} className={`skill-tag skill-tag--${gap.severity}`}>
                {gap.skill}
              </span>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Interview;