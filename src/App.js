import React , { useState, useEffect }from 'react';
import './App.css';
import Message from './Components/Message';
import { UsersArray } from './Utils/Constants';
import User3Service from './Services/User3Service';

function App() {
  const initialMessages = [{user: UsersArray.USER1, message: 'Hello There!'}, {user: UsersArray.USER2, message: 'I like Apples!'}, {user: UsersArray.USER3, message: 'Hi! Me Too!'}]

  const [messages, setMessages] = useState(initialMessages);
  const [inputForm, setInputForm] = useState('');
  const [inputError, setInputError] = useState(false);

  function insertNewMessage(e) {
    if(inputForm) {
      setMessages( state => [...state, {user: UsersArray.USER1, message: inputForm}]);
      setInputForm('');
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 3000)
    }
    e.preventDefault();
  }
    
    const deleteMessage = (index, user) => {
      if(user === UsersArray.USER1) {
        setMessages( [...messages.slice(0, index), ...messages.slice(index+1)] )
      }
  }

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
          return <Message userInput={msg.user} messageInput={msg.message} key={i} listId={i} sendingData={deleteMessage}></Message>} )
      }
      <form onSubmit={e => insertNewMessage(e)}>
      <label className={`msg-label ${!inputError ? 'hide' : ''}`}>Your message can not be empty!</label>
        <input type='text' value={inputForm} onChange={e => setInputForm(e.target.value)} placeholder='Enter your message here'></input>
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default App;