import React from 'react';
import './search-box.styles.css';
// import { Card } from '../card/card.component';


export const SearchBox = (props) => (
	<input className='search'
		type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
    />
);
