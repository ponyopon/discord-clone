import React from 'react';
import "./ChatMessage.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className='message'>
    <AccountCircleIcon />
    <div className='messageInfo' >
        <h4>aaa
            <span className='messageTimestamp'></span>
        </h4>
        <p>message</p>

    </div>

    </div>
  )
}

export default ChatMessage