AI Resume Analyzer & Interview Preparation Platform

An AI-powered web application that analyzes a user's resume or self-description against a job description and provides personalized feedback, interview preparation resources, and an ATS-optimized resume using Gemini AI.

The system helps job seekers understand their strengths, identify skill gaps, and prepare effectively for job interviews.

Features
1. AI Resume Analysis

Users can upload a resume or enter their self-description.

The system analyzes the content using Gemini AI.

Generates insights about skills, experience, and improvements.

2. ATS Resume Score

Calculates an ATS (Applicant Tracking System) compatibility score.

Evaluates how well the resume matches the job description.

Provides suggestions to improve ATS performance.

3. Interview Question Generation

Based on the job description and resume, the AI generates:

Technical Questions

Behavioral Questions

Role-specific Interview Questions

This helps candidates prepare for real interviews.

4. Skill Gap Analysis

The system identifies missing skills required for the job role and highlights areas where the candidate needs improvement.

5. Personalized Preparation Roadmap

Gemini AI generates a step-by-step roadmap including:

Skills to learn

Topics to study

Suggested preparation strategy

6. ATS Friendly Resume Generator

The system automatically generates an ATS-optimized resume tailored for the selected job description.

7. User Authentication

User registration and login

Secure authentication using JWT cookies

Users can view their previous analysis reports

Tech Stack
Frontend

React.js

Axios

CSS / Tailwind

Backend

Node.js

Express.js

MongoDB

JWT Authentication

Multer (file uploads)

AI Integration

Google Gemini AI API

Resume text processing and analysis

Other Tools

pdf-parse (PDF resume parsing)

REST APIs

Git & GitHub

System Workflow

User registers and logs into the platform.

User enters:

Job Description

Resume upload OR self-description

Resume text is extracted from the PDF.

The data is sent to Gemini AI.

AI generates:

Resume score

Interview questions

Skill gap analysis

Preparation roadmap

ATS optimized resume

Results are displayed in a detailed report.

Installation
1. Clone the repository
git clone https://github.com/yourusername/ai-resume-analyzer.git
2. Navigate to project directory
cd ai-resume-analyzer
3. Install dependencies

Backend

cd backend
npm install

Frontend

cd frontend
npm install
4. Environment Variables

Create a .env file in backend.

Example:

PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_GENAI_API_KEY=your_gemini_api_key
5. Run the project

Backend

npm run dev

Future Improvements

LinkedIn profile analysis

Mock interview simulation

Job recommendation system

Resume improvement suggestions

Frontend

npm run dev
