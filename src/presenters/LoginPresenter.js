import React, { useState } from 'react';
import LoginView from '../views/LoginView';
import { useNavigate } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import { useAuth } from '../hooks/AuthProvider';

function LoginPresenter() {
  // Access authentication data
  const auth = useAuth();
  // State variables to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  /*
    let navigate = useNavigate();
  */
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if username and password are not empty
    try {
      if (username !== '' && password !== '') {
        await auth.login({ username: username, password: password });
      }
      /*const token = await signIn(username, password);
      navigate('/hello',{ state: {token} });*/
    } catch (err) {
      setError(err); // Set error state if authentication fails then error message to the console
      console.error(err.message);
    }
  };

  // Render different components based on authentication status

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
      {auth.token && <HomePresenter />}
    </>
  );
}

export default LoginPresenter;
