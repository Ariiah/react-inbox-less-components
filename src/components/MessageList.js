import React from 'react'
import Message from './Message'

const MessageList = ({ emails }) => {
  return (
    <div>
      {
        emails.map((email, id) => {
          return <Message key={id} email={email} messages={messages}/>
        })
      }
    </div>
  )
}

export default MessageList
