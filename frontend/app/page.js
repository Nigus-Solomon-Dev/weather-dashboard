'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import ForecastCard from '@/components/ForecastCard';
import { getWeather, getForecast } from '@/utils/api';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);
    setForecast(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        getWeather(city),
        getForecast(city),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'City not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_40%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Weather Dashboard</p>
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Live weather, forecast, and city insights
                  </h1>
                  <p className="mt-4 max-w-2xl text-slate-300">
                    Enter any city and get instant weather conditions plus a clean 5-day outlook in one dashboard.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 shadow-lg shadow-slate-950/20 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Quick tip</p>
                  <p className="mt-1 text-lg font-semibold text-white">Try London, Tokyo, New York, or Mumbai</p>
                </div>
              </div>

              <div className="mb-8">
                <SearchBar onSearch={handleSearch} loading={loading} />
                {error && (
                  <div className="mt-4 rounded-3xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-100">
                    {error}
                  </div>
                )}
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
                <div>
                  <WeatherCard weather={weather} />
                </div>
                <div className="space-y-6">
                  <ForecastCard forecast={forecast} />
                  {!loading && !weather && !error && (
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
                      <p className="text-lg font-semibold text-white">Your weather dashboard is ready.</p>
                      <p className="mt-3 text-sm leading-6">
                        Search for a city above to reveal current weather details, forecast cards, and a polished dashboard experience.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
