import React, { useState } from 'react';
import '../styling/loginView.css'
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from "../hooks/AuthProvider";
import HomeView from "./HomeView";

export default function LoginView() {
  const auth = useAuth();
  // State variables to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if username and password are not empty
    try {
      if (username !== '' && password !== '') {
        await auth.login({ username: username, password: password });
        navigate("/hello")
      }
    } catch (err) {
      setError(err); // Set error state if authentication fails then error message to the console
    }
  };
  //handle input change to remove errorHandler
  function handleInputChange() {
    setError('');
  }
  // Render the login form and all components that related
  return (
    <>{!auth.token ?
    <div>
      <div className="container module">
        <p className='pLogin'>Log into your account</p>
        <div className={`error ${error ? '' : 'error-hidden'}`}>
          Invalid username or password
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            id="text"
            name="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              handleInputChange();
              setUsername(e.target.value)
            }}
            required
          />
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              handleInputChange();
              setPassword(e.target.value)
            }}
            required
          />
          <Link to="/reset">forgot your password?</Link>
          <button className="sign-in" type="submit">Sign in</button>
        </form>
        <button className="create-account">
          <Link to="/signup" className="create-account-text">Create an account</Link>
        </button>
      </div>
    </div> : <HomeView />}

    </>
  );
}
