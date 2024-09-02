import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useState } from "react";
import { Footer, Header, Main, Form, List, Weather } from "./components";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const handleAddActivity = (newActivity) => {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <>
      <Header />
      <Main>
        <Weather setWeather={setWeather} weather={weather} />
        <List
          onDeleteActivity={handleDeleteActivity}
          isGoodWeather={weather.isGoodWeather}
        />
        <Form onAddActivity={handleAddActivity} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
