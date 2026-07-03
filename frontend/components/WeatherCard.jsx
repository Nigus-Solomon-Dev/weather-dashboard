export default function WeatherCard({ weather }) {
  // If no weather data, show nothing
  if (!weather) return null;

  // OpenWeather icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white w-full max-w-md shadow-xl">
      
      {/* City name and country */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">{weather.city}</h2>
        <p className="text-lg">{weather.country}</p>
        <p className="text-sm opacity-75">{weather.date}</p>
      </div>

      {/* Temperature and icon */}
      <div className="flex items-center justify-center gap-4 my-6">
        <img src={iconUrl} alt={weather.description} className="w-24 h-24" />
        <div className="text-6xl font-bold">{Math.round(weather.temperature)}°C</div>
      </div>

      {/* Weather description */}
      <p className="text-xl text-center capitalize">{weather.description}</p>

      {/* Extra details */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-center">
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-75">Feels Like</p>
          <p className="font-semibold">{Math.round(weather.feelsLike)}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-75">Humidity</p>
          <p className="font-semibold">{weather.humidity}%</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-75">Wind</p>
          <p className="font-semibold">{Math.round(weather.windSpeed)} km/h</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm opacity-75">Pressure</p>
          <p className="font-semibold">{weather.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}