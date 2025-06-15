# 📌 Ruptrix – AI-Powered Receipt Management

Ruptrix is a full-stack web application built with *Next.js, **React, **Prisma, and **Supabase*, designed to help users scan, save, and manage receipts efficiently with the power of AI.

---

## 🛠 Tech Stack

- *Frontend*: Next.js, React, Tailwind CSS  
- *Backend*: Node.js, Prisma ORM, Supabase (PostgreSQL)  
- *AI Integration*: OCR or AI-based text extraction for scanned receipts  
- *Authentication*: Clerk (or Supabase Auth)  
- *Deployment*: Vercel or similar platforms  

---

## 🚀 Getting Started

Install dependencies:

bash
npm install


Run the development server:

bash
npm run dev


Visit https://ruptrix.vercel.app/ in your browser.

---

## ⚙ Project Structure


ruptrix/
├── app/               # Main pages and routing
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and config
├── prisma/            # Prisma schema and DB access
├── public/            # Static files
├── data/              # Static data (e.g., categories)
├── actions/           # Server-side actions (API logic)
├── .env               # Environment variables
└── middleware.js      # Middleware for auth or logging


---

## 🧠 Features

- 🧾 AI-powered receipt scanning  
- 📊 Transaction tracking and history  
- 🔐 User authentication  
- 📤 Manual and scanned entry support  
- 🌐 Clean and responsive UI  

---

## 🧪 Prisma Setup

Run Prisma migrations:

bash
npx prisma migrate dev


Generate Prisma client:

bash
npx prisma generate


---

## 🔐 Environment Variables

Create a .env file in the root with:

ini
DATABASE_URL=your_database_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key


---

## 📄 License

MIT License
