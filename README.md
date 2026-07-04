# 🌤️ Weather Dashboard

A full-stack weather app that gives you real-time weather and 5-day forecasts for any city. Search, see current conditions, and plan ahead.

## Problem It Solves

Checking weather across multiple sites is slow and scattered. This dashboard brings everything into one place — current conditions, forecast, and city insights — all in a clean, fast interface.

## Features

- Search weather by city name
- Current temperature, humidity, wind speed, and pressure
- 5-day forecast with highs and lows
- Works on mobile, tablet, and desktop

## Tech Stack

**Frontend:** Next.js, Tailwind CSS, Axios  
**Backend:** Express.js, OpenWeather API

## Quick Start

```bash
# Clone the repo
git clone https://github.com/Nigus-Solomon-Dev/weather-dashboard.git
cd weather-dashboard

# Install frontend
cd frontend && npm install

# Install backend
cd ../backend && npm install

# Set up your API key
cp .env.example .env
# Add your OpenWeather API key to .env
```

### Run the app

```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

Open `http://localhost:3000` to see the app.

## API Keys

You need a free API key from [OpenWeather](https://openweathermap.org/api). Add it to `backend/.env`:

```
OPENWEATHER_API_KEY=your_key_here
```

## Deployment

- **Frontend:** Deploy to Vercel
- **Backend:** Deploy to Render or Railway

## Folder Structure

```
weather-dashboard/
├── frontend/         # Next.js app
│   ├── app/          # Pages and layout
│   ├── components/   # UI components
│   └── utils/        # API calls
├── backend/          # Express server
│   ├── server.js     # Main server file
│   └── .env.example  # Environment template
└── README.md
```

## Live Demo

[View Demo](https://weather-dashboard.vercel.app)

---

Built by [Nigus Solomon](https://github.com/Nigus-Solomon-Dev)
