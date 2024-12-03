import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
      <div>
      <Avatar src='https://m.media-amazon.com/images/I/817-ehv65jL.png' size={25} round={true}/>
      </div>
      <div className='flex items-center'>
        <h2 className='ml-2 font-bold text-sm'>{item.name} </h2>
        <p className='ml-2 py-2 text-sm'>{item.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
