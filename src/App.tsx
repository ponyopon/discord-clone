
import  Chat  from './components/chat/Chat';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import Login  from './components/login/Login';
import { useAppSelector } from './app/hooks';
import { auth } from './firebase';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from './utils/ErrorFallBack';


function App() {

const user = useAppSelector((state) => state.user.user)

const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if(loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }));
      } else {
        dispatch(logout())
      }
    })

  }, [dispatch]);//dispatchを使ってstoreに通知を送る
  return (
    <div className="App">
      {user ? 
      (<>
      <ErrorBoundary FallbackComponent={ErrorFallBack} >
      <Sidebar />
      </ErrorBoundary>
      <Chat />
      </>
      ) : (
        <Login />
      )}

    </div>
  );
}

export default App;
