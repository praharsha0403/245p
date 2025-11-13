import { useEffect, useState } from "react";
import "./WeatherView.css";

function WeatherView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const lat = "33.6846"; // Paris latitude
  const lon = "-117.8265";  // Paris longitude
  const APIkey = "1d5435656b4ff00e89d81179dcdc4791"; // Replace with your actual API key

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API error: " + response.status);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log("Weather API response:", actualData); // for debug
        setLoading(false);
        setError(false);
        setData(actualData);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="weather-container">
      {loading && <p>Loading weather data...</p>}
      {error && <p>Something went wrong fetching the data.</p>}

      {!loading && !error && data?.main && data?.weather && data?.wind && (
        <>
          <h2>Weather in {data.name}</h2>
          <p><strong>Temperature:</strong> {data.main.temp} °C</p>
          <p><strong>Min Temp:</strong> {data.main.temp_min} °C</p>
          <p><strong>Max Temp:</strong> {data.main.temp_max} °C</p>
          <p><strong>Condition:</strong> {data.weather[0].main} ({data.weather[0].description})</p>
          <p><strong>Wind:</strong> {data.wind.speed} m/s at {data.wind.deg}°</p>
        </>
      )}
    </div>
  );
}

export default WeatherView;
