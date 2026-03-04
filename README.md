# ai-resume-analyzer

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

ai-resume-analyzer is a robust web application built on Express.js designed to simplify and enhance the resume review process through the power of artificial intelligence. Featuring a secure authentication system and a modern web interface, this platform allows users to upload their resumes and receive intelligent, data-driven feedback to improve their career prospects. Whether you are a job seeker aiming for your dream role or a recruiter looking for the perfect candidate, ai-resume-analyzer provides the tools needed to analyze skills, experience, and formatting effectively.

## ✨ Features

- 🔐 Auth
- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 Express.js


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
