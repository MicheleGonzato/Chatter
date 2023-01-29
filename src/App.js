import React , { useState, useEffect, useRef }from 'react';
import './App.css';
import Message from './Components/Message';
import { usersArray } from './Utils/Constants';
import User3Service from './Services/User3Service';
import User2Service from './Services/User2Service';

function App() {
  const initialMessages = [{user: usersArray.USER1, message: 'Hello There!'}, {user: usersArray.USER2, message: 'I like Apples!'}, {user: usersArray.USER3, message: 'Hi! Me Too!'}]
  
  const [messages, setMessages] = useState(initialMessages);
  const [inputForm, setInputForm] = useState('');
  const [inputError, setInputError] = useState(false);
  const messagesEndRef = useRef(null);

  const User2Respond = () => {
    setTimeout(() => {
      User2Service.requireCatMessage().then( res => {
        // random joke api
        // setMessages( state => [...state, User2Service.prepareMessage(res.data.joke)])
        // cat api
        setMessages( state => [...state, User2Service.prepareMessage(res.data.fact)]);
      }).catch(err => console.error('[Axios Error]: ', err));
    }, '1000')
  }

  const insertNewMessage = (e) => {
    e.preventDefault();
    if(inputForm) {
      setMessages( state => [...state, {user: usersArray.USER1, message: inputForm}]);
      setInputForm('');
      User2Respond();
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 3000)
    }
  }
  
  const deleteMessage = (index, user) => {
    if(user === usersArray.USER1) {
      setMessages( [...messages.slice(0, index), ...messages.slice(index+1)] )
    }
  }
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages])

  useEffect(() => {
      setInterval(() => {
        // User3Service.requireInsult(usersArray.USER1).then( res => {
          // cat api
          // setMessages( state => [...state, User3Service.prepareMessage(res.data.fact)])
          // insult api
        //   setMessages( state => [...state, User3Service.prepareMessage(res.data.text)])
        // }).catch(err => console.error('[Axios Error]: ', err));
      }, '5000');
    }, []);

  return (
    <div className='d-flex flex-column app px-3'>

      <img className='border border-dark rounded my-2 mx-auto d-block' src={require('./logochatt.png')}></img>
    
      <div className='flex-1 messages-box'>
        {
          messages?.map( (msg, i) => {
            return <Message userInput={msg.user} messageInput={msg.message} id={i} key={i} listId={i} sendingData={deleteMessage}></Message>} )
        }
      <div ref={messagesEndRef}></div>
      </div>

      <form className='mt-auto input-footer' onSubmit={e => insertNewMessage(e)}>
        <small className={`fixed-bottom text-light bg-danger form-text py-1 px-4 mb-5 ${!inputError ? 'hide' : ''}`}>Your message can not be empty!</small>
        <div className='d-flex'>
          <input type='text' autoFocus value={inputForm} onChange={e => setInputForm(e.target.value)} placeholder='Enter your message here' className={`${inputError ? 'border border-danger' : ''} form-control my-auto txt-input`}></input>
          <input type='submit' className='btn btn-success m-1 pl-2' value='Enter' />
        </div>
      </form>

    </div>
  );
}

export default App;