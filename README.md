# 🚀 SensAI – AI-Powered Career Coach with Next JS, Neon DB, Tailwind, Prisma, Inngest, Shadcn UI.

SensAI is a Full Stack AI-driven career coaching platform that empowers job seekers by analyzing industry trends, enhancing resumes, preparing for interviews, and generating tailored cover letters using **Gemini AI**.

> 🔗 Live Demo: [https://sens-ai-ai-career-coach.vercel.app](https://sens-ai-ai-career-coach.vercel.app)  

---

## 🌟 Features

### 🔐 User Authentication & Dashboard
- Secure sign-up and login functionality.
- Personalized dashboard with:
  - Min-Max Salary Trends
  - In-demand Skills
  - Market Outlook & Growth
  - Industry Demand Level

### 📄 AI Resume Builder
- AI-generated resumes with better phrasing and ATS-optimized keywords.
- Gemini AI suggests enhancements and improves formatting.

### 🎯 Interview Preparation
- Dynamic, industry-specific questions powered by Gemini AI.
- Interactive quiz mode to practice.
- Performance tracking dashboard with progress metrics.

### ✉️ Cover Letter Generator
- Job-specific AI-generated cover letters.
- Personalized, professional tone with role-aligned structure.

---

## ⚙️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | Next.js 15, Tailwind CSS, Shadcn UI |
| Backend      | Prisma, Inngest                     |
| Database     | NeonDB                              |
| AI Services  | Gemini AI API                       |

---

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```

