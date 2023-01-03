import React, { Fragment } from 'react';
import classes from './searchBar.module.css';

const SearchBar = () => {

    return (
        <search className={classes.search}>
            <input 
            lassName={classes.search}
                id="search" 
                type="text" 
                name="search" 
                placeholder="Search TellusEd">
            </input>
        </search>
    );
};

export default SearchBar;

