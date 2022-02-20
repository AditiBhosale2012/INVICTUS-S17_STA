import React from 'react';

const Start = ({ onQuizStart }) => {
    return(
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1>Are you aware about 'that time of the month'?</h1>
            <p>Take this quiz to find out!</p>
            <button className='button is-info is-medium' onClick={onQuizStart}>Start</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Start;