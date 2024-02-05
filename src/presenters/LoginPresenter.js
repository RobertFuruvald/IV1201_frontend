import React, { useState } from 'react';
import LoginView from '../views/LoginView';
import { useNavigate } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import {useAuth} from '../hooks/AuthProvider';

function LoginPresenter() {
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
/*
  let navigate = useNavigate();
*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(username !== '' && password !== '') {
        await auth.login({username:username, password:password});
      }
      /*const token = await signIn(username, password);
      navigate('/hello',{ state: {token} });*/
    } catch (err) {
      setError(err);
      console.error(err.message);
    }
  };

  return (
    <>

      {!auth.token && <LoginView
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          error={error}
        />}
     {auth.token && <HomePresenter/>}
    </>
  );
}

export default LoginPresenter;
