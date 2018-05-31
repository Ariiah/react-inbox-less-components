import React from 'react'
import Message from './Message'

const MessageList = ({ emails }) => {
  return (
    <div>
      {
        emails.map((email, id) => {
          return <Message
            key={id}
            email={email}
            // emails={emails}
            selected={email.selected}
            starred={email.starred}
            read={email.read}
            labels={email.labels}
                 />
        })
      }
    </div>
  )
}

export default MessageList
