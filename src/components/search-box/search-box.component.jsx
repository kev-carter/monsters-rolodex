import React from 'react';

import './search-box.styles.css';

// functional component (gets some props and returns some jsx).  No state or lifecycle methods
export const SearchBox = ( { placeholder, handleChange }) => (
    <input 
        type='search' 
        className='search' 
        placeholder={placeholder} 
        onChange={handleChange}/>
);

