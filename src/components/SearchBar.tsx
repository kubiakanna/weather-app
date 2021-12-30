import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search'>
          <input className='search-bar' type="text" placeholder="Enter city name" />
          <button className='search-btn' type="submit"><i className="fas fa-search" /></button>
        </div>
    )
}

export default SearchBar;