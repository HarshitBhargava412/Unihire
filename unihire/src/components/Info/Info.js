import React from 'react';
import './Info.css';

function Info() {

  let data_string = localStorage.getItem("data");
  let data = JSON.parse(data_string);
  let keysArray = Object.keys(data);
  let valuesArray = Object.values(data);

  return (
    <div className='Info'>
      <h1 className='pageTitle'>Details</h1>
      <div className="content">
        <div className="infoTable">
          <div className="key">
            {keysArray.map((element) => (
              <div className='heads'>{element}</div>
            ))}
          </div>
          <div className="value">
            {valuesArray.map((element) => (
              <div className='values'>{element}</div>
            ))}
          </div>
        </div>
        <div className="functions">
          <div className="editButton">Edit the Record</div>
          <div className="deleteButton">Delete the Record</div>
        </div>
      </div>
    </div>
  )
}

export default Info