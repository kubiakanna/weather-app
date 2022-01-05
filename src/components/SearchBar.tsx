import React from 'react';
import './SearchBar.css';
import $ from "jquery";

interface ISearchBarProps {
  'city': string,
  'setCity': React.Dispatch<React.SetStateAction<string>>,
  'weather': any,
  'setWeather': React.Dispatch<React.SetStateAction<any>>
}

const SearchBar: React.FC<ISearchBarProps> = ({ city, setCity, weather, setWeather }) => {
  const key = 'bba1089143d06781004f13cb2fa068c1';

  let input = document.getElementById("searchCityInput");
  let myBtn = document.getElementById("searchBtn");
  if(input !== null && city !== '') {
    input.addEventListener("keydown", function(e) {
        if (e.code === 'Enter' && myBtn !== null) {
            e.preventDefault();
            myBtn.click();

            $("#searchBtn").prop("disabled", true);
            
            setTimeout(function(){
            $("#searchBtn").prop("disabled", false);
            }, 1500);
        } 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    if(city !== '') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setCity('');
        console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
    };
  };

  const searchBarClasses = () => {
    if(typeof weather.main.temp !== 'undefined') {
        const temperature = Math.round(weather.main.temp);
        if(temperature < 15) {
            return 'search-bar search-bar__cold';
        }
        return 'search-bar search-bar__warm';
    }
    return 'search-bar';
  }

  const searchBtnClasses = () => {
    if(typeof weather.main.temp !== 'undefined') {
        const temperature = Math.round(weather.main.temp);
        if(temperature < 15) {
            return 'search-btn search-btn__cold';
        }
        return 'search-btn search-btn__warm';
    }
    return 'search-btn';

  }

    return (
        <div className='search'>
          <input
            id="searchCityInput"
            className={searchBarClasses()}
            type="text"
            placeholder="Enter city name"
            onChange={ handleChange }
            value={ city }
            />
          <button
            id="searchBtn"
            className={searchBtnClasses()}
            type="submit"
            onClick={ handleSubmit }
            >
              <i className="search-icon fas fa-search" />
          </button>
        </div>
    )
}

export default SearchBar;