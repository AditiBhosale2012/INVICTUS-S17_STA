import React, {useEffect, useState} from 'react';

import {formatTime} from '../utils';

const End = ({ results, data, onReset, onAnswerCheck, time}) =>{
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if(result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct);
    }, []); 
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Your results:</h1>
                    <p><strong>{correctAnswers}</strong> out of {data.length}</p>
                    <h2><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></h2>
                    <p><strong>Your time: </strong>{formatTime(time)}</p>
                    <button className='button is-info mr-2' onClick={onAnswerCheck}>Check your answers</button>
                    <button className='button is-success'onClick={onReset}>Try again</button>
                </div>
            </div>
        </div>
    )
}

export default End;