import "./App.css";
import { Footer, Header, Main, Form, List, Weather } from "./components";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const handleAddActivity = (newActivity) => {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  };

  return (
    <>
      <Header />
      <Main>
        <Weather />
        <List />
        <Form onAddActivity={handleAddActivity} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
