import React, { useState, useEffect } from "react";

export function Message({userInput, messageInput}) {

  const [date, setDate] = useState(0);

  useEffect(() => {
    const currentDate = new Date()
    setDate(currentDate.getHours() + ':' + String(+currentDate.getMinutes()).padStart(2, '0'));
  }, []);

    return ( 
      <div className="message">
        <div className="header">
          <p>{userInput}</p>
        </div>
        <div className="body">
          <p>{messageInput}</p>
        </div>
        <div className="footer">
          <p>{date}</p> 
        </div>
      </div>
    );
}

export default Message;