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
    e.preventDefault();
    if(inputForm) {
      setMessages( state => [...state, {user: UsersArray.USER1, message: inputForm}]);
      setInputForm('');
    } else {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 5000)
    }
  }
    
    const deleteMessage = (index, user) => {
      if(user === UsersArray.USER1) {
        setMessages( [...messages.slice(0, index), ...messages.slice(index+1)] )
      }
  }

  useEffect(() => {
      setInterval(() => {
        // User3Service.requireInsult(UsersArray.USER1).then( res => {
          // cat api
          // setMessages( state => [...state, User3Service.prepareMessage(res.data.fact)])
          // random joke api
          // setMessages( state => [...state, User3Service.prepareMessage(res.data.joke)])
          // insult api
        //   setMessages( state => [...state, User3Service.prepareMessage(res.data.text)])
        // }).catch(err => console.error('[Axios Error]: ', err));
      }, '5000');
    }, []);

  return (
    <div className='d-flex flex-column app px-3'>

      <img className='fixed-top border border-dark rounded my-2 mx-auto d-block' src={require('./logochatt.png')}></img>
    
      <div className='flex-1 messages-box'>
        {
          messages?.map( (msg, i) => {
            return <Message userInput={msg.user} messageInput={msg.message} id={i} key={i} listId={i} sendingData={deleteMessage}></Message>} )
        }
      </div>

      <form className='mt-auto input-footer' onSubmit={e => insertNewMessage(e)}>
        <small className={`text-danger bg-light form-text p-1 mt-2 ${!inputError ? 'hide' : ''}`}>Your message can not be empty!</small>
        <div className='d-flex'>
          <input type='text' value={inputForm} onChange={e => setInputForm(e.target.value)} placeholder='Enter your message here' className='form-control my-auto txt-input'></input>
          <input type='submit' className='btn btn-success m-1 pl-2' value='Enter' />
        </div>
      </form>

    </div>
  );
}

export default App;