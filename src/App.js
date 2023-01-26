import React , { useState, useEffect }from 'react';
import './App.css';
import Message from './Components/Message';
import { UsersArray } from './Utils/Constants';
import User3Service from './Services/User3Service';

function App() {
  const initialMessages = [{user: UsersArray[0], message: 'Hello There!'}, {user: UsersArray[1], message: 'I like Apples!'}, {user: UsersArray[2], message: 'Hi! Me Too!'}]

  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
      setInterval(() => {
        User3Service.requireMessage().then( res => {
          // setMessages( state => [...state, User3Service.prepareMessage(res.data.fact)])
          setMessages( state => [...state, User3Service.prepareMessage(res.data.joke)])
        }).catch(err => console.error('[Axios Error]: ', err));
      }, '5000');
    }, []);

  return (
    <div className="App">
    <h2>Chatter!</h2>
      {
        messages?.map( (msg, i) => {
          return <Message userInput={msg.user} messageInput={msg.message} key={i}></Message>} )
      }
      <input></input>
      <button>Send</button>
    </div>
  );
}

export default App;