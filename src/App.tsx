import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useState } from 'react';

const key = 'bba1089143d06781004f13cb2fa068c1';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const appClasses = 'app app__warm';
  const mainDisplayClasses = 'main-display main-display__warm';

  return (
    <div className={appClasses}>
      <div className={mainDisplayClasses}>
        <SearchBar />
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
