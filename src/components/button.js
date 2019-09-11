import React from 'react';

// css styles object which will be passed inline to input tag
const styles={
    height:"40px",
    width:"67px",
    backgroundColor:"black",
    fontSize:"19px",
    border:"1px solid grey",
    boxShadow:"2px 2px 5px rgb(30,30,30)",
    color:"white"
};

const Button =(props) =>{
    return(
        <input style={styles} type="button" value={props.value} onClick={props.handleClick}/>
    );
};

export default Button;