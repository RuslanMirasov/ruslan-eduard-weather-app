import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';
import { useState } from 'react';
import { Footer, Header, Main, Form, List, Weather } from './components';
import './App.css';

import activitiesEntry from './components/activitiesBase';

function App() {
  const [weather, setWeather] = useState({});
  const [category, setCategory] = useState('europe');
  const [activities, setActivities] = useLocalStorageState('activities', { defaultValue: activitiesEntry });
  const [isError, setIsError] = useState(null);

  const handleAddActivity = newActivity => {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log(activities);
  };

  const handleDeleteActivity = id => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <>
      <Header />
      <Main isGoodWeather={weather.isGoodWeather} isError={isError}>
        <Weather weather={weather} isError={isError} setWeather={setWeather} setIsError={setIsError} />
        <List onDeleteActivity={handleDeleteActivity} isGoodWeather={weather.isGoodWeather} isError={isError} />
        {!isError && <Form onAddActivity={handleAddActivity} category={category} setCategory={setCategory} />}
      </Main>
      <Footer />
    </>
  );
}

export default App;
