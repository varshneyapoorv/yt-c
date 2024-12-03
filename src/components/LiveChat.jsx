import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {

  const message = useSelector(state=>state.chat.message);

  const dispatch = useDispatch();


  useEffect(()=>{
    const timer = setInterval(()=>{
         dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
     },200)

     return(()=>{
         clearInterval(timer)
     })
     
 },[])

  return (
    <div className='px-4 py-1 '>
      <div>
        {message.map((item, index)=>{
          return (
        <ChatMessage key = {index} item={item}/>
          )
        })}
      </div>
      
    </div>
  )
}

export default LiveChat
