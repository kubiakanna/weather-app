import React from 'react'
import './WeatherDisplay.css'

const WeatherDisplay = () => {
    const displayClasses = 'display display__warm'

    return (
        <div className={displayClasses}>
            <div className="day">
                Friday
            </div>
            <div className="date">
                31 December 2021
            </div>
            <div className="time">
                12:30
            </div>
            <div className='city'>
                New York, US
            </div>
            <i className="display-icon fas fa-solid fa-snowflake" />
            <div className="temperature">
                2°C
            </div>         
        </div>
    )
}

export default WeatherDisplay;
