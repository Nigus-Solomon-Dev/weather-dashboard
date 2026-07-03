
export default function ForecastCard({ forecast }) {
  
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="w-full max-w-md mt-6">
      <h3 className="text-white text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {forecast.map((day, index) => {
          const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
          return (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white text-center min-w-[100px] flex-shrink-0"
            >
              <p className="text-sm font-semibold">{day.date}</p>
              <img src={iconUrl} alt={day.description} className="w-12 h-12 mx-auto" />
              <p className="text-xs capitalize">{day.description}</p>
              <div className="flex justify-center gap-2 text-sm">
                <span>{Math.round(day.maxTemp)}°</span>
                <span className="opacity-50">{Math.round(day.minTemp)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}