import React from 'react'
import './WeatherDisplay.css'

interface IWeatherDisplayProps {
    'weather': any
}

const WeatherDisplay: React.FC<IWeatherDisplayProps> = ({ weather }) => {

    const dateDisplay = (date: Date) => {
        let months = ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        
        return `${day} ${month} ${year}`;
    }

    const dayWeek = (date: Date) => {
        let days = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

        let dayOfTheWeek = days[date.getDay()];
        
        return dayOfTheWeek;
    }

    const time = (date: Date) => {
        let minutes = date.getMinutes();
        let minutesString = ((minutes < 10) ? "0" + minutes : minutes);
        let currTime = date.getHours() + ":" + minutesString;

        return currTime;
    }

    const iconType = () => {
            switch (weather.weather[0].main) {
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

    const displayClasses = () => {
            const temperature = Math.round(weather.main.temp);
            if (temperature < 15) {
                return 'display__cold';
            }
            return 'display__warm';
        }

    if(typeof weather.main.temp !== 'undefined') {
    return (
        <div className={'display ' + displayClasses()}>
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
                {`${weather.name}, ${weather.sys.country}`}
            </div>
            {iconType()}
            <div className="temperature">
                {Math.round(weather.main.temp)}°C
            </div>
        </div>
    )
    } else {
        return (null);
    }
}

export default WeatherDisplay;