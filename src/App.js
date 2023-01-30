import React , { useState, useEffect, useRef }from 'react';
import './App.css';
import Message from './Components/Message';
import HumorApiService from './Services/HumorApiService';
import User3Service from './Services/User3Service';
import User2Service from './Services/User2Service';
import { usersArray } from './Utils/Constants';
import { useSelector } from 'react-redux';
import { addMessage, deleteMessage, reset } from './Store/Actions/Messages.action';
import { useDispatch } from "react-redux";

function App() {
  
  const [inputForm, setInputForm] = useState('');
  const [inputError, setInputError] = useState(false);
  const messagesEndRef = useRef(null);

  const storeMessages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const User2Respond = () => {
    setTimeout(() => {
      User2Service.requireMessage().then( res => {
        dispatch(addMessage(usersArray.USER2, res.data.joke))
      }).catch(err => {
        console.error('[Axios]:JokeAPI ', err)
        callCatApi(usersArray.USER2);
      });
    }, '1000')
  }

  const insertNewMessage = (e) => {
    e.preventDefault();
    if(inputForm) {
      dispatch(addMessage(usersArray.USER1, inputForm));
      if(inputForm === 'reset') {
        console.log('!!', inputForm)
        dispatch(reset());
      } 
      setInputForm('');
      User2Respond();
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 3000)
    }
  }
  
  const deleteMessageByIndex = (index, user) => {
    if(user === usersArray.USER1) {
      dispatch(deleteMessage(index))
    }
  }

  const callCatApi = (user) => {
    HumorApiService.randomCat().then( 
      res => dispatch(addMessage(user, res.data.fact) ))
    .catch(err => console.error('[Axios]:cat', err));
  }
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [storeMessages])

  useEffect(() => {
      setInterval(() => {
        User3Service.requireInsult().then( res => {
          dispatch(addMessage(usersArray.USER3, res.data.text))
        }).catch(err => {
          console.error('[Axios]:InsultAPI ', err);
          callCatApi(usersArray.USER3);
        });
      }, '20000');
    }, []);

  return (
    <div className='d-flex flex-column app px-3'>

      <img className='border border-dark rounded my-2 mx-auto d-block' alt='Chatter logo' src={require('./logochatt.png')}></img>
    
      <div className='flex-1 messages-box'>
        {
          storeMessages?.messages.map( (msg, i) => {
            return <Message userInput={msg.user} messageInput={msg.message} time={msg.time} id={i} key={i} listId={i} sendingData={deleteMessageByIndex}></Message>} )
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