import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const description = weather[0].description;

  let backgroundImage = '';

  switch (description.toLowerCase()) {
    case 'clear sky':
      backgroundImage = 'url("src/images/clear-sky.png")';
      break;
    case 'few clouds':
      backgroundImage = 'url("src/images/few-clouds.jpg")';
      break;
    case 'scattered clouds':
      backgroundImage = 'url("src/images/scattered-clouds.jpg")';
      break;
    case 'broken clouds':
      backgroundImage = 'url("src/images/broken-clouds.jpg")';
      break;
    case 'overcast clouds':
      backgroundImage = 'url("src/images/overcast-clouds.jpg")';
      break;
    case 'shower rain':
      backgroundImage = 'url("src/images/shower-rain.jpg")';
      break;
    case 'rain':
      backgroundImage = 'url("src/images/rain.jpg")';
      break;
    case 'light rain':
      backgroundImage = 'url("src/images/light-rain.jpg")';
      break;
    case 'thunderstorm':
      backgroundImage = 'url("src/images/thunderstorm.jpg")';
      break;
    case 'snow':
      backgroundImage = 'url("src/images/snow.jpg")';
      break;
    case 'mist':
      backgroundImage = 'url("src/images/mist.jpg")';
      break;
    default:
      backgroundImage = 'url("src/images/default.jpg")';
      break;
  }

  return (
    <div className="weather-card" style={{ backgroundImage }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
