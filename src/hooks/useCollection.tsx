import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks';
import { CollectionReference, DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';


interface Channels {
    id: string,
    channel : DocumentData
}

const useCollection = (data:string) => {

    const user = useAppSelector((state) => state.user)
    const [documents, setDocuments] = useState<Channels[]>([])

    const collentionRef:Query<DocumentData> = query(collection(db, 'channels'));

    useEffect(()=> {
            onSnapshot(collentionRef, (querySnapshot) => {
                const channelsResults:Channels[]  = [];
                querySnapshot.docs.forEach((doc) => channelsResults.push({
                    id: doc.id,
                    channel: doc.data(),
                })
                )
                setDocuments(channelsResults)
            });
            
    },[])
  return (
    {documents}
  )
}

export default useCollection