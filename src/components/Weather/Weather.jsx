import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { Section, Tabs } from "../";
import "./Weather.css";

const Weather = ({ setWeather, weather }) => {
  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });
  const { condition, temperature } = weather;

  const fetchWeather = async () => {
    const response = await fetch(
      `https://example-apis.vercel.app/api/weather/${location}`
    );
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);
    return () => clearInterval(timer);
  }, [location]);

  return (
    <Section>
      <div className="weather">
        <span className="condition">{condition}</span>
        <span className="temperature">
          {temperature > 0 ? `+${temperature}` : temperature}°C
        </span>
      </div>
      <Tabs location={location} setLocation={setLocation} />
    </Section>
  );
};

export default Weather;
