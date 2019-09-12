import React from 'react';
import '../screen.css';

const ScreenRow = (props)=>{
    return(
        <div>
            {/* readonly input so that user cant modify it */}
            <input className="screen-row" type="text" readOnly value={props.value}/>
        </div>
    )
}

export default ScreenRow;