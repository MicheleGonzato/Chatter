import React from 'react';
import './App.css';
import Message from './Components/Message';
import { UsersArray } from './Utils/Constants';

function App() {
  const messages = [{user: UsersArray[0], message: 'Hello There!'}, {user: UsersArray[1], message: 'I like Apples!'}, {user: UsersArray[2], message: 'Hi! Me Too!'}]

  return (
    <div className="App">
    <h2>Chatter!</h2>
      {
        messages.map( (msg, i) => { return <Message userInput={msg.user} messageInput={msg.message} key={i}></Message>} )
      }
      <input></input>
      <button>Send</button>
    </div>
  );
}

export default App;