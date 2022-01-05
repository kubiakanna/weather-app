import React from 'react'
import './WeatherDisplay.css'

interface IWeatherDisplayProps {
    'weather': any
}

const WeatherDisplay: React.FC<IWeatherDisplayProps> = ({ weather }) => {

    const dateDisplay = (date: Date) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        
        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        if(typeof weather.main.temp !== 'undefined')
        return `${day} ${month} ${year}`;
    }

    const dayWeek = (date: Date) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let dayOfTheWeek = days[date.getDay()];
        if(typeof weather.main.temp !== 'undefined')
        return dayOfTheWeek;
    }

    const time = (date: Date) => {
        let currTime = date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes());
        if(typeof weather.main.temp !== 'undefined')
        return currTime;
    }

    const iconType = () => {
        if(typeof weather.main.temp !== 'undefined') {
            switch(weather.weather[0].main) {
                case 'Snow':
                    return <i className="display-icon fas fa-solid fa-snowflake" />;
                case 'Clouds':
                    return <i className="display-icon fas fa-solid fa-cloud" />;
                case 'Mist':
                case 'Smoke':
                case 'Haze':
                case 'Dust':
                case 'Fog':
                case 'Sand':
                case 'Ash':
                    return <i className="display-icon fas fa-solid fa-smog" />;
                case 'Clear':
                    return <i className="display-icon fas fa-solid fa-sun" />;
                case 'Drizzle':
                case 'Rain':
                    return <i className="display-icon fas fa-solid fa-cloud-rain" />;
                case 'Thunderstorm':
                    return <i className="display-icon fas fa-solid fa-bolt" />;
                case 'Squall':
                case 'Tornado':
                    return <i className="display-icon fas fa-solid fa-wind" />;      
                default:
                    return <div className="temperature">{weather.weather[0].description}</div>;
            }
        }
    }
    const temperature = () => {
        if(typeof weather.main.temp !== 'undefined') {
            return `${Math.round(weather.main.temp)}°C`;
        }
    }

    const displayClasses = () => {
        if(typeof weather.main.temp !== 'undefined') {
            const temperature = Math.round(weather.main.temp);
            if(temperature < 15) {
                return 'display display__cold';
            }
            return 'display display__warm';
        }
    }

    const location = () => {
        if(typeof weather.main.temp !== 'undefined') {
            return `${weather.name}, ${weather.sys.country}`;
        }
    }


    return (
        <div className={displayClasses()}>
            <div className="day">
                {dayWeek(new Date())}
            </div>
            <div className="date">
                {dateDisplay(new Date())}
            </div>
            <div className="time">
                {time(new Date())}
            </div>
            <div className='city'>
                {location()}
            </div>
            {iconType()}
            <div className="temperature">
                {temperature()}
            </div>       
        </div>
    )
}

export default WeatherDisplay;