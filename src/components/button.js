import React from 'react';
import '../button.css';

const Button =(props) =>{
    return(
        <input className="Btn" type="button" value={props.value} onClick={props.handleClick}/>
    );
};

export default Button;