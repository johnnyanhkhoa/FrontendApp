const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('City not found');
  }
  console.log(response)
  return response.json();
};
