import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  let appClasses = 'app app__warm';
  let mainDisplayClasses = 'main-display main-display__warm';

  const temperature = 12 /*Math.round(weather.main.temp)*/;
    if(temperature < 15) {
      appClasses = 'app app__cold';
      mainDisplayClasses = 'main-display main-display__cold';
    }

  return (
    <div className={appClasses}>
      <div className={mainDisplayClasses}>
        <SearchBar city={ city } setCity={ setCity } weather={ weather }setWeather={ setWeather } />
        <WeatherDisplay weather={ weather } />
      </div>
    </div>
  );
}

export default App;
