import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import { fetchWeather } from './services/weatherAPI';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && <Loader />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
