require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const API_KEY = process.env.OPENWEATHER_API_KEY;
app.use(cors({ origin: 'https://weather-dashboard-eight-smoky.vercel.apphttp://localhost:3000' }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await axios.get(url);
    const data = response.data;

    const result = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      date: new Date(data.dt * 1000).toLocaleDateString(),
    };
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'City not found' });
  }

})



app.get('/forecast', async (req, res) => {
  try {
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    const response = await axios.get(url);
    const data=response.data;
     const forecast = [];
    const seenDates = new Set();

    for (const item of data.list) {
      const date = item.dt_txt.split(' ')[0];
      if (!seenDates.has(date) && forecast.length < 5) {
        seenDates.add(date);
        forecast.push({
          date: date,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
        });
      }
    }
    
    res.json(forecast);

  }catch(error){
        res.status(500).json({ error: 'City not found' });

  }
})

app.listen(PORT, () => {
  console.log(`port ${PORT}..`);
});