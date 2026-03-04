# ai-resume-analyzer

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

ai-resume-analyzer is a robust web application built on Express.js designed to simplify and enhance the resume review process through the power of artificial intelligence. Featuring a secure authentication system and a modern web interface, this platform allows users to upload their resumes and receive intelligent, data-driven feedback to improve their career prospects. Whether you are a job seeker aiming for your dream role or a recruiter looking for the perfect candidate, ai-resume-analyzer provides the tools needed to analyze skills, experience, and formatting effectively.

## ✨ Features

🔐 1. User Authentication

- Secure user registration and login system.

- Authentication implemented using JWT tokens stored in cookies.

- Allows users to securely access their analysis reports.

📄 2. Resume Upload and Parsing

- Users can upload their resume in PDF format.

- The system extracts text from the resume using pdf-parse for further analysis.

📝 3. Job Description Input

- Users can enter a job description for the role they want to apply for.

- The system compares the resume with the job description to evaluate compatibility.

🤖 4. AI-Powered Resume Analysis

- Uses Gemini AI to analyze the resume content.

- Provides intelligent insights about strengths and areas for improvement.

📊 5. ATS Resume Score

- Calculates an ATS compatibility score.

- Shows how well the resume matches the job description.

- Suggests improvements to increase ATS score.

🎯 6. Interview Question Generation

- AI generates interview questions based on the resume and job description:

- 💻 Technical interview questions

- 🧠 Behavioral interview questions

- 🧑‍💼 Role-specific interview questions

- 📉 7. Skill Gap Analysis

- Identifies missing or weak skills required for the job role.

- Helps users understand what skills they need to improve.

🗺️ 8. Preparation Roadmap

- AI generates a personalized preparation plan.

- Provides guidance on topics and technologies to learn.

📑 9. ATS-Friendly Resume Generation

- Automatically generates an optimized resume tailored for the job description.

- Improves chances of passing ATS screening systems.

📂 10. Report Dashboard

- Users can view their previous analysis reports.

- Helps track progress and improvements over time.

🛠️ Tech Stack

- ⚛️ React.js – Frontend user interface

- 🟢 Node.js – Backend runtime environment

- 🚀 Express.js – Backend framework for APIs

- 🍃 MongoDB – Database for storing user data and reports

- 🔗 Axios – API communication between frontend and backend

- 🎨 CSS – Styling and responsive UI design

## 📦 Key Dependencies

```
@google/genai: ^1.43.0
@napi-rs/canvas: ^0.1.95
bcryptjs: ^3.0.3
cookie-parser: ^1.4.7
cors: ^2.8.6
dotenv: ^17.3.1
express: ^5.2.1
jsonwebtoken: ^9.0.3
mongoose: ^9.2.3
multer: ^2.1.0
pdf-parse: ^1.1.1
puppeteer: ^24.37.5
zod: ^4.3.6
zod-to-json-schema: ^3.25.1
```

## 🚀 Run Commands

- **test**: `npm run test`
- **dev**: `npm run dev`
- **start**: `npm run start`


## 📁 Project Structure

```
.
├── backend
│   ├── package.json
│   ├── server.js
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── interviewController.js
│   │   ├── middlewares
│   │   │   ├── authMiddlewar.js
│   │   │   └── fileMiddleware.js
│   │   ├── models
│   │   │   ├── blacklistModel.js
│   │   │   ├── interviewReportModel.js
│   │   │   └── userModel.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── interviewRoutes.js
│   │   └── services
│   │       └── aiService.js
│   └── vercel.json
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   ├── features
    │   │   ├── auth
    │   │   │   ├── auth.context.jsx
    │   │   │   ├── auth.form.scss
    │   │   │   ├── components
    │   │   │   │   └── Protected.jsx
    │   │   │   ├── hooks
    │   │   │   │   └── useAuth.js
    │   │   │   ├── pages
    │   │   │   │   ├── Login.jsx
    │   │   │   │   └── Register.jsx
    │   │   │   └── services
    │   │   │       └── auth.api.js
    │   │   └── interview
    │   │       ├── hooks
    │   │       │   └── useInterview.js
    │   │       ├── inteview.context.jsx
    │   │       ├── pages
    │   │       │   ├── Home.jsx
    │   │       │   └── Interview.jsx
    │   │       ├── services
    │   │       │   └── interviewAPI.js
    │   │       └── style
    │   │           ├── home.scss
    │   │           └── interview.scss
    │   ├── index.css
    │   ├── main.jsx
    │   ├── style
    │   │   └── button.scss
    │   └── style.scss
    ├── vercel.json
    └── vite.config.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Dhanush18100/ai-resume-analyzer.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---
