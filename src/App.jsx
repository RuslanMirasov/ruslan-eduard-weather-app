import "./App.css";
import { Footer, Header, Main, Form, List, Weather } from "./components";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [isGoodWeather, setIsGoodWeather] = useLocalStorageState(
    "isGoodWeather",
    {
      defaultValue: false,
    }
  );

  const handleAddActivity = (newActivity) => {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  };

  const handleDeleteActivity = (id) => {
    const test = activities.filter((activity) => activity.id !== id);
    setActivities(test);
  };

  return (
    <>
      <Header />
      <Main>
        <Weather />
        <List onDeleteActivity={handleDeleteActivity} />
        <Form onAddActivity={handleAddActivity} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
