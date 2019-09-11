import React from 'react';

// css style object
const styles={
    border:"none",
    backgroundColor:"cyan",
    textAlign:"right",
    width:"90%",
    fontSize:"20px",
};

const ScreenRow = (props)=>{
    return(
        <div className="screen-row">
            {/* readonly input so that user cant modify it */}
            <input style={styles} type="text" readOnly value={props.value}/>
        </div>
    )
}

export default ScreenRow;