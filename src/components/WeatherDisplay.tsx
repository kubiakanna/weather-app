import React from 'react'

const WeatherDisplay = () => {
    return (
        <div>
            <div className='city'>
                New York, US
            </div>
            <div className="temperature">
                2°C
            </div>
            <div className="description">
                Snow
            </div>
            <i className="fas fa-solid fa-snowflake" />         
        </div>
    )
}

export default WeatherDisplay;
