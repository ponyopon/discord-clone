import React, { useEffect, useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MoodIcon from '@mui/icons-material/Mood';
import GifIcon from '@mui/icons-material/Gif';
import ChatMessage from './ChatMessage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';



const Chat = () => {
    const [inputText, setInputText] = useState<string>("")
    const channelName = useAppSelector((state)=>state.channel.channelName)
    const channelId = useAppSelector((state)=>state.channel.channelId)
    const user = useAppSelector((state)=>state.user.user)
    const {subDocuments: messages} = useSubCollection("channels", "messages")


    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        //channelsコレクションのmessageコレクションの中身メッセージ情報を入れる
        const collectionRef:CollectionReference<DocumentData> = collection(
            db,
            "channels",
            String(channelId),
            "messages",
            );
            const docRef:DocumentReference<DocumentData> = await addDoc(collectionRef, {
                message: inputText,
                timestamp:serverTimestamp(),
                user:user
            })
            setInputText("")
    }
  return (
    <div className='chat'>
        <ChatHeader channelName={channelName}/>
        <div className='chatMessages'>
            {messages.map((message, index) => (
                <ChatMessage key={index} 
                message={message.message}
                timestamp={message.timestamp}
                user={message.user}
                 />
            ))}
            

        </div>
        <div className='chatInput'>
            <AddCircleOutlineIcon />
            <form>
            <input type='text' placeholder='送信' onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setInputText(e.target.value)} value={inputText}></input>
            <button type='submit' className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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

export default Chat