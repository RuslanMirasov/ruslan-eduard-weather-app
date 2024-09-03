import useLocalStorageState from 'use-local-storage-state';
import { uid } from 'uid';
import { useState } from 'react';
import { Footer, Header, Main, Form, List, Weather } from './components';
import './App.css';

const activitiesEntry = [
  { id: 'a1b2c3d4e5f6', name: 'Go for a walk', isForGoodWeather: true },
  { id: 'g7h8i9j0k1l2', name: 'Have a picnic', isForGoodWeather: true },
  { id: 'm3n4o5p6q7r8', name: 'Ride a bike', isForGoodWeather: true },
  { id: 's9t0u1v2w3x4', name: 'Go to the beach', isForGoodWeather: true },
  { id: 'y5z6a7b8c9d0', name: 'Play outdoor sports', isForGoodWeather: true },
  { id: 'e1f2g3h4i5j6', name: 'Watch a movie', isForGoodWeather: false },
  { id: 'k7l8m9n0o1p2', name: 'Read a book', isForGoodWeather: false },
  { id: 'q3r4s5t6u7v8', name: 'Play board games', isForGoodWeather: false },
  { id: 'w9x0y1z2a3b4', name: 'Cook a new recipe', isForGoodWeather: false },
  { id: 'c5d6e7f8g9h0', name: 'PlayStation forever!', isForGoodWeather: false },
];

function App() {
  const [weather, setWeather] = useState({});
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
        {!isError && <Form onAddActivity={handleAddActivity} />}
      </Main>
      <Footer />
    </>
  );
}

export default App;
