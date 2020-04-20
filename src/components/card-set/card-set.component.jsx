import React from 'react';

import './card-set.styles.css';

// functional component (gets some props and returns some jsx).  No state or lifecycle methods
export const CardSet = ( { cardSetValue, handleChangeType }) => (
    <select name='cardSet' className='select' value={cardSetValue} onChange={handleChangeType}> 
        <option value="1">Robots</option>
        <option value="2">Monsters</option>
        <option value="3">RobotHeads</option>
        <option value="4">Cats</option>
        <option value="5">People</option>
    </select>
);

