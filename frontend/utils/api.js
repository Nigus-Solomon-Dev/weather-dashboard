import axios from 'axios'
const API_BASE = 'https://weather-dashboard-backend-2qi0.onrender.com';
export const getWeather=async (city)=>{
  const response=await axios.get(`${API_BASE}/weather?city=${city}`)
  return response.data;
}
export const getForecast = async (city) => {
  const response = await axios.get(`${API_BASE}/forecast?city=${city}`);
  return response.data;
};