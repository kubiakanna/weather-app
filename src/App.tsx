import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({'main': {'temp': undefined}});

  const appClasses = () => {
      if(typeof weather.main.temp !== 'undefined') {
        const temperature = Math.round(weather.main.temp);
        if(temperature < 15) {
            return 'app__cold';
        }
        return 'app__warm';
      }
  }

  const mainDisplayClasses = () => {
    if(typeof weather.main.temp !== 'undefined') {
      const temperature = Math.round(weather.main.temp);
      if(temperature < 15) {
          return 'main-display__cold';
      }
      return 'main-display__warm';
    }
  }

  return (
    <div className={'app ' + appClasses()}>
      <div className={'main-display ' + mainDisplayClasses()}>
        <SearchBar city={ city } setCity={ setCity } weather={ weather } setWeather={ setWeather } />
        <WeatherDisplay weather={ weather } />
      </div>
    </div>
  );
}

export default App;
