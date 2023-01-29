import React, { useState } from "react";
import { usersArray } from "../Utils/Constants";

export function Message({userInput, messageInput, time, listId, sendingData}) {

  const [isMouseHover, setIsMouseHover] = useState(false);
  
  const userColor = () => {
    switch(userInput) {
      case usersArray.USER1:
        return 'text-success';
      case usersArray.USER2:
        return 'text-primary';
      case usersArray.USER3:
        return 'text-danger';
      default:
        return 'text-warning';
    }
  }

    return ( 
      <div className={`d-flex message rounded border border-dark bg-light px-2 my-1 ${userInput === usersArray.USER1 ? 'ms-auto' : ''}`} 
        onMouseEnter={() => {
          setIsMouseHover(true);
          }}
        onMouseLeave={() => {
          setIsMouseHover(false)
        }}>
        <div className='flex-fill pe-5 ps-2'>
          <div className='header'>
            <p className={`small m-0 ${userColor()}`}>{userInput}</p>
          </div>
          <div className='body'>
            <p className='m-0'>{messageInput}</p>
            <p className='m-0'>{isMouseHover}</p>
          </div>
          <div className='footer'>
            <p className='small text-muted m-0'>{time}</p> 
          </div>
        </div>
        {
          userInput === usersArray.USER1 ?
        <div className='pt-2' >
          <button type="button" className={`btn btn-danger rounded-circle ${isMouseHover ? 'visible' : 'invisible'}`} aria-label="Close" onClick={() => sendingData(listId, userInput)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div> : ''
        }

      </div>
    );
}

export default Message;