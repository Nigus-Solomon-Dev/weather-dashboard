export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-white w-full max-w-md shadow-xl">
      
      {/* City name and country */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">{weather.city}</h2>
        <p className="text-base">{weather.country}</p>
        <p className="text-xs opacity-75">{weather.date}</p>
      </div>

      {/* Temperature and icon */}
      <div className="flex items-center justify-center gap-4 my-3">
        <img src={iconUrl} alt={weather.description} className="w-20 h-20" />
        <div className="text-5xl font-bold">{Math.round(weather.temperature)}°C</div>
      </div>

      {/* Weather description */}
      <p className="text-lg text-center capitalize">{weather.description}</p>

      {/* Extra details */}
      <div className="grid grid-cols-2 gap-2 mt-4 text-center">
        <div className="bg-white/10 p-2 rounded-lg">
          <p className="text-xs opacity-75">Feels Like</p>
          <p className="text-sm font-semibold">{Math.round(weather.feelsLike)}°C</p>
        </div>
        <div className="bg-white/10 p-2 rounded-lg">
          <p className="text-xs opacity-75">Humidity</p>
          <p className="text-sm font-semibold">{weather.humidity}%</p>
        </div>
        <div className="bg-white/10 p-2 rounded-lg">
          <p className="text-xs opacity-75">Wind</p>
          <p className="text-sm font-semibold">{Math.round(weather.windSpeed)} km/h</p>
        </div>
        <div className="bg-white/10 p-2 rounded-lg">
          <p className="text-xs opacity-75">Pressure</p>
          <p className="text-sm font-semibold">{weather.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}