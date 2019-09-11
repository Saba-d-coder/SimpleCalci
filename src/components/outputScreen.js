import React from 'react';
import ScreenRow from './outputScreenRow';

const OutputScreen = (props) =>{
    return(
        <div className="screen">
            {/* passing question and answer from props to ScreenRow component as a prop */}
            <ScreenRow value={props.question}/>
            <ScreenRow value={props.answer}/>
        </div>
        
    )
}

export default OutputScreen;
