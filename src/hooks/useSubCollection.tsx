import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks';
import { CollectionReference, DocumentData, Query, Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';


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

const useSubCollection = (collectionName:string, subCollectionName: string) => {

    const user = useAppSelector((state) => state.user)
    const [subDocuments, setSubDocuments] = useState<Messages[]>([])
    const channelId = useAppSelector((state)=>state.channel.channelId)
    const [messages, setMessages] = useState<Messages[]>([])

    const collentionRef:Query<DocumentData> = query(collection(db, 'channels'));

    useEffect(() => {

        let collectionRef = collection(
            db,
            collectionName, 
            String(channelId), 
            subCollectionName
            )

        const collenctionReOrederBy = query(collectionRef, orderBy("timestamp",'desc'))

        onSnapshot(collenctionReOrederBy,(snapshot) => {
            let results :Messages[]= []
            snapshot.docs.forEach((doc) => {
                results.push({
                    timestamp:doc.data().timestamp,
                    message:doc.data().message,
                    user:doc.data().user,
                })
            })
            setSubDocuments(results)
        })
    },[channelId])
  return (
    {subDocuments}
  )
}

export default useSubCollection