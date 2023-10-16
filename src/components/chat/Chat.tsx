import React, { useEffect, useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MoodIcon from '@mui/icons-material/Mood';
import GifIcon from '@mui/icons-material/Gif';
import ChatMessage from './ChatMessage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

interface Messages {
    timestamp: Timestamp,
    message: string,
    user : null | {
        uid:string;
        photo:string;
        email:string;
        displayName:string;
    }
}

const Chat = () => {
    const [inputText, setInputText] = useState<string>("")
    const [messages, setMessages] = useState<Messages[]>([])
    const channelName = useAppSelector((state)=>state.channel.channelName)
    const channelId = useAppSelector((state)=>state.channel.channelId)
    const user = useAppSelector((state)=>state.user.user)

    useEffect(() => {

        let collectionRef = collection(db,"channels", String(channelId))
        onSnapshot(collectionRef,(snapshot) => {
            let results :Messages[]= []
            snapshot.docs.forEach((doc) => {
                results.push({
                    timestamp:doc.data().timestamp,
                    message:doc.data().message,
                    user:doc.data().user,
                })
            })
            setMessages(results)
        })
    },[])
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
            console.log(docRef)
    }
  return (
    <div className='chat'>
        <ChatHeader channelName={channelName}/>
        <div className='chatMessages'>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
        </div>
        <div className='chatInput'>
            <AddCircleOutlineIcon />
            <form>
            <input type='text' placeholder='送信' onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setInputText(e.target.value)}></input>
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