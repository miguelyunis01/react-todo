import React from 'react';
import './TodoIcon.css';
import {AiFillCheckCircle} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';

const iconTypes = {
    "check": color =>(
        <AiFillCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <AiFillCloseCircle className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({type, color='gray', onClick}) {
    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };