import { useEffect, useState } from "react";
import { Section } from "../";
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState({});

  const fetchWeather = async () => {
    const url = "https://example-apis.vercel.app/api/weather";
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 5000);
    return clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="weather">
        <span>{weather.condition}</span>
        <span>
          {weather.temperature > 0
            ? `+${weather.temperature}`
            : weather.temperature}
          °C
        </span>
      </div>
    </Section>
  );
};

export default Weather;
