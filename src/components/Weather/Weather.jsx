import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { Section, Tabs } from "../";
import "./Weather.css";
import { useState } from "react";

const Weather = ({ setWeather, weather, isError, setIsError }) => {
  const [isLoading, setIsloading] = useState(true);

  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });
  const { condition, temperature } = weather;

  const addError = (status) => {
    setIsError({
      image: "🚨",
      text: status,
    });
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/${location}`
      );
      if (!response.ok) {
        addError(response.status);
        return;
      }
      setIsError(null);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      const status = error.status || 500;
      addError(status);
    } finally {
      setIsloading(false);
    }
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
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="weather">
          <span className="condition">
            {isError ? isError.image : condition}
          </span>
          <span className="temperature">
            {isError
              ? isError.text
              : `${temperature > 0 ? "+" : ""}${temperature}°C`}
          </span>
        </div>
      )}

      <Tabs
        location={location}
        setLocation={setLocation}
        setIsloading={setIsloading}
      />
    </Section>
  );
};

export default Weather;
