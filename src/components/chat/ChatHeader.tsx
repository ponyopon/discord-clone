import React from 'react';
import "./ChatHeader.scss";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
        <div className='chatHeaderLeft'>
            <h3>
                <span className='chatHeaderHash'>#</span>
                udemy
            </h3>

        </div>
        <div className='chatHeaderRight'>
            <NotificationsIcon />
            <PushPinIcon />
            <PeopleIcon />
            <input type="text" placeholder='検索' />
            <div className='chatHeaderSearch'>
                
                <SearchIcon />
                <SendIcon />
                <HelpIcon />

            </div>

        </div>

    </div>
  )
}

export default ChatHeader