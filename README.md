# 🎙️ Ellie Says – Learn Hebrew the Fun Way!

![React](https://img.shields.io/badge/Built%20with-React-blue) ![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-teal) ![Firebase](https://img.shields.io/badge/Backend-Firebase-orange) ![AI-Powered](https://img.shields.io/badge/AI-Google%20Gemini-yellow)

“Ellie Says” is more than just a phrase - it's a <b>personal language coach</b> powered by games, AI, and your motivation 🐘

## 🧠 Overview
**Ellie Says** is an interactive web application that makes learning **Hebrew** engaging, effective, and enjoyable. Through a series of **gamified lessons**, real-time **AI translations**, and **personal progress tracking**, learners of all levels can build vocabulary and master essential phrases.

🎬 [Watch Ellie Says Commercial on Youtube](https://youtu.be/vfGoi8GQtI8)

---

## ✨ Features

- 🎮 **Multiple Game Modes** (Trivia, Word Match, Photo Word)
- 🤖 **AI-Powered Translation Tool** (Google Gemini)
- 📈 **Progress Tracking & Achievements**
- 🔒 **Authentication via Email/Google**
- 🧑‍🎓 **Guest Mode with Limited Access**
- 🎨 **Responsive, Modern UI** (React + Next.js + TailwindCSS)

---

## 📚 Table of Contents

- [🎙️ Ellie Says – Learn Hebrew the Fun Way!](#️-ellie-says--learn-hebrew-the-fun-way)
  - [🧠 Overview](#-overview)
  - [✨ Features](#-features)
  - [📚 Table of Contents](#-table-of-contents)
  - [🚀 Try it out](#-try-it-out)
  - [🧩 Project Architecture](#-project-architecture)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚧 Getting Started](#-getting-started)
  - [🖼️ Screenshots](#️-screenshots)
  - [👨‍💻 Authors](#-authors)

---

## 🚀 Try it out 

[🔗 Try Ellie Says Online](https://ellie-says.vercel.app/translate) 

---

## 🧩 Project Architecture

```

/src
├── app/
│   ├── games/              # Game modes (Trivia, Word Match, Photo Word)
│   ├── profile/            # User statistics, saved words, achievements
│   ├── translate/          # AI-powered translation page
│   └── contact/            # Contact & feedback form
├── components/             # Reusable UI components
├── data/                   # Static fallback content
├── lib/
│   ├── gemini.ts           # Google Gemini AI integration
│   └── ThemeContext.tsx    # Dark/light theme context
├── utils/                  # Utility functions
└── firebase.tsx            # Firebase configuration
```

---

## 🛠️ Tech Stack

| Category         | Technologies                         |
|------------------|--------------------------------------|
| **Frontend**     | React, Next.js, Tailwind CSS         |
| **Backend**      | Firebase Firestore, Firebase Auth    |
| **AI**           | Google Gemini API                    |
| **Auth**         | Firebase Email/Password + Google     |
| **Storage**      | Firestore for user data and results  |
| **Deployment**   | Vercel               |

---

## 🚧 Getting Started


```bash
### 1. Clone the project
git clone https://github.com/almograz1/Ellie-Says.git
cd ellie-says

### 2. Install dependencies
npm install

### 3. Configure Firebase
Set up your `.env.local`.

### 4. Run the app
npm run dev
```

---

## 🖼️ Screenshots

<table width="100%">
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/990f8e5c-162a-4c1e-9e0d-803c16b447a4" width="90%"/>
      <br/>
      <b>Main Menu</b>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/2732edcb-5ba4-4f3c-bbcb-3425a968412f" width="90%"/>
      <br/>
      <b>Game Mode Selection</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/741a5ead-38d9-4a8b-bedb-58f12069c133" width="90%"/>
      <br/>
      <b>Word Match Game</b>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/849e0d68-6514-447e-9560-927048ecf944" width="90%"/>
      <br/>
      <b>Hebrew Trivia Challenge</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/a2e9e806-6007-4d7a-b5b0-45367b22a1c4" width="90%"/>
      <br/>
      <b>Photo Word Game</b>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/234506ed-3618-43e7-b679-cd8271d11aac" width="90%"/>
      <br/>
      <b>Translation Page</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/a15e4281-2934-4ef0-861f-9d267598cc3f" width="90%"/>
      <br/>
      <b>My Profile</b>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/02f8a9dc-7b37-4338-a858-606ab03eb71f" width="90%"/>
      <br/>
      <b>Achievements</b>
    </td>
  </tr>
</table>

---

## 👨‍💻 Contributors:

This project is contributed by:

<table width="100%">
  <tr>
    <td><b>Almog Raz</b></td>
    <td>
      <a href="https://www.linkedin.com/in/almog-raz/">
        <img src="https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin" alt="LinkedIn" height="24"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/almograz1">
        <img src="https://img.shields.io/badge/GitHub-Profile-black?style=flat&logo=github" alt="GitHub" height="24"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><b>Ron Salama</b></td>
    <td>
      <a href="https://www.linkedin.com/in/ron-salama-3860a0107/">
        <img src="https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin" alt="LinkedIn" height="24"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/RS-OG">
        <img src="https://img.shields.io/badge/GitHub-Profile-black?style=flat&logo=github" alt="GitHub" height="24"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><b>Yaniv Bodaga</b></td>
    <td>
      <a href="https://www.linkedin.com/in/yaniv-bodaga/">
        <img src="https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin" alt="LinkedIn" height="24"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/yaniv99">
        <img src="https://img.shields.io/badge/GitHub-Profile-black?style=flat&logo=github" alt="GitHub" height="24"/>
      </a>
    </td>
  </tr>
  <tr>

