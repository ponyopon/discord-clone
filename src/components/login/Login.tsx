import React from 'react';
import "./login.scss";
import { Button } from '@mui/material';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message)
    })
  }
  return (
    <div className='login'>
        <div className='loginlogo'>
            <img src="./discordIcon.png" alt="" />

        </div>
        <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login