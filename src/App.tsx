import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const key = 'bba1089143d06781004f13cb2fa068c1';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <WeatherDisplay />
    </div>
  );
}

export default App;
