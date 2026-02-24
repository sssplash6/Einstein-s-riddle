# 🧩 Einstein's Riddle — Sketchy Grid

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/deployed-Vercel-black.svg)](https://vercel.com/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

**A drag-and-drop logic puzzle with a pencil-sketch UI, multilingual support, and a live global leaderboard**

[Play](#-play) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Scoring](#-scoring) • [Setup](#-setup) • [Backend](#-backend)

</div>

---

## 🎮 Play

Open `index.html` in a browser and start solving. No installation needed for the frontend.

1. Pick a language — **English**, **O'zbek**, or **Русский**
2. Read the clues and drag tokens into the correct grid positions
3. Double-click a placed token to remove it
4. The puzzle auto-checks as you go — correct tokens lock in place
5. Solve the full grid to win, then submit your name to the leaderboard

---

## ✨ Features

- 🖊️ **Pencil-sketch UI** — hand-drawn aesthetic with smooth animations
- 🌍 **Multilingual** — clues and UI available in English, Uzbek, and Russian
- 🖱️ **Drag-and-drop** — intuitive token placement with mobile support
- ✅ **Auto-check** — real-time validation highlights correct and incorrect placements
- 🏆 **Live leaderboard** — global rankings backed by Postgres, deduplicated per session
- 🔊 **Sounds & haptics** — audio and vibration feedback on supported devices

---

## 🛠️ Tech Stack

| Category | Details |
|----------|---------|
| **Frontend** | HTML, CSS, Vanilla JavaScript (ES6+) |
| **Backend** | Node.js, Vercel Serverless Functions |
| **Database** | PostgreSQL |
| **Deployment** | Vercel |
| **i18n** | Custom multilingual clue system (EN, UZ, RU) |

---

## 🏅 Scoring

Lower cost = higher score. The formula penalizes both time and mistakes:

```
Cost   = time_ms + mistakes × 60,000 + mistakes² × 3,000
Points = max(0, 3,000,000 − Cost)
```

The leaderboard sorts by **points descending**, then by **time** as a tiebreaker. The faster and more accurate you are, the higher you rank.

---

## 🚀 Setup

### Frontend

No build step required — just open the file directly:

```bash
open index.html
```

To point the frontend at your own backend, set the `data-api-base` attribute on the `<body>` tag in `index.html`:

```html
<body data-api-base="https://your-backend-url.vercel.app">
```

### Backend

The backend runs as Vercel serverless functions with a Postgres database.

```bash
cd backend
npm install
```

**Environment variables** (set in Vercel dashboard or `.env` for local dev):

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | Postgres connection string (`sslmode=require`) | required |
| `ALLOWED_ORIGIN` | Frontend origin, no trailing slash | required |
| `POINTS_BASE` | Max achievable score | `3000000` |
| `MISTAKE_PENALTY_MS` | Linear penalty per mistake (ms) | `60000` |
| `MISTAKE_PENALTY_QUAD_MS` | Quadratic penalty per mistake (ms) | `3000` |
| `DEBUG_ERRORS` | Surface error details in responses | `false` |

**Local development:**

```bash
vercel dev
```

**Deploy:**

```bash
vercel --prod
```

---

## 🗄️ Backend

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/submit` | Submit a completed session and score |
| `GET` | `/api/leaderboard` | Fetch ranked leaderboard entries |

### Recompute scores after changing penalty weights

If you update `POINTS_BASE` or penalty values, recompute existing scores in your database:

```sql
UPDATE sessions
SET score = GREATEST(
  0,
  3000000 - (duration_ms + mistakes * 60000 + mistakes * mistakes * 3000)
);
```

---

## 🗺️ Roadmap

- [ ] Additional puzzle variants and difficulty levels
- [ ] Timed challenge mode
- [ ] Shareable puzzle links
- [ ] Dark mode

---

## 📜 License

MIT License — built with ♥ by [sant1x](https://github.com/sant1x)
