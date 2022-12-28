import React from 'react';
import defaultPNG from '../../static/images/1Avatar.png';
import classes from './avatar.module.css';


const Avatar = () => {
    
    return (
        <div>
            <img src={defaultPNG} alt='Avatar' className={classes.avatar}></img>
        </div>
    );
};

export default Avatar;

