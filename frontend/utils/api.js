import axios from 'axios'
const API_BASE = 'http://localhost:5000';
export const getWeather=async (city)=>{
  const response=await axios.get(`${API_BASE}/weather?city=${city}`)
  return response.data;
}
export const getForecast = async (city) => {
  const response = await axios.get(`${API_BASE}/forecast?city=${city}`);
  return response.data;
};