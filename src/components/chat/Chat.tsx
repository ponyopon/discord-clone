import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MoodIcon from '@mui/icons-material/Mood';
import GifIcon from '@mui/icons-material/Gif';
import ChatMessage from './ChatMessage';

const chat = () => {
  return (
    <div className='chat'>
        <ChatHeader />
        <div className='chatMessages'>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
        </div>
        <div className='chatInput'>
            <AddCircleOutlineIcon />
            <form>
            <input type='text' placeholder='送信'></input>
            <button type='submit' className='chatInputButton'>
                送信
            </button>

            </form>
            <div className='chatInputIcons'>
                <CardGiftcardIcon />
                <GifIcon />
                <MoodIcon />
            </div>

            
        </div>

    </div>
  )
}

export default chat