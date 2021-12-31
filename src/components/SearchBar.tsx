import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
  const searchBarClasses = 'search-bar search-bar__warm';
  const searchBtnClasses = 'search-btn search-btn__warm';
    return (
        <div className='search'>
          <input className={searchBarClasses} type="text" placeholder="Enter city name" />
          <button className={searchBtnClasses} type="submit"><i className="search-icon fas fa-search" /></button>
        </div>
    )
}

export default SearchBar;