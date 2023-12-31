import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
//import { collection, query } from 'firebase/firestore/lite';
import { DocumentData, addDoc, collection, query } from 'firebase/firestore';
import {  QuerySnapshot, onSnapshot } from 'firebase/firestore';
import useCollection from '../../hooks/useCollection';

interface Channel {
    id: string,
    channel : DocumentData
}

const Sidebar = () => {
    const user = useAppSelector((state) => state.user.user)
    const {documents:channels} = useCollection("channels")
    const addChannel = async() => {
        let channelName:string |null = prompt('新しいチャンネルを作成します');

        if(channelName) {
            await addDoc(collection(db, 'channels'),{
                channelName:channelName,
            })
        }
    }

  return (
    <div className='sidebar'>
            <div className="sidebarLeft">
                <div className='serverIcon'>
                    <img src="./discordIcon.png" alt="" />
                    <img src="./logo192.png" alt="" />
                </div>
                

            </div>
            <div className='sidebarRight'>
                <div className='sidebarTop'>
                    <h3>discord</h3>
                    <ExpandMoreIcon onClick={()=>addChannel()}/>
                </div>

                <div className='sidebarChannels'>
                    <div className='sidebarChannelsHeader'>
                        <div className='sidebarHeader'>
                            <ExpandMoreIcon />
                            <h4>プログラミング</h4>
                            
                        </div>
                        <AddIcon className='sidebarAddIcon' onClick={()=>addChannel()}/>
                    </div>

                    <div className='sidebarChannelList'>
                        {channels.map((channel) => (
                            <SidebarChannel channel={channel} id={channel.id} key={channel.id}/>
                        ))}
                    </div>

                    <div className='sidebarFooter'>
                        <div className='sidebarAccount'>
                            <img src={user?.photo} alt=""  onClick={() => auth.signOut()}/>
                            <div className='accountName'>
                                <h4>{user?.displayName}</h4>
                                <span>#{user?.uid.substring(0,4)}</span>

                            </div>
                        </div>
                        <div className='sidebarVoice'>
                            <MicIcon />
                            <HeadsetMicIcon />
                            <SettingsIcon />
                        </div>
                    </div>

                </div>

            </div>

    </div>
  )
}

export default Sidebar