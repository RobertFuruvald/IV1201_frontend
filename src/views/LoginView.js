import React, {useState} from 'react';
import '../styling/loginView.css'
import {Link} from 'react-router-dom';

function LoginView({username, setUsername, password, setPassword, handleSubmit, error}) {
  const [showError, setShowError] = useState(false);

  //add error handler from backend to specify what error from backend server
  function errorHandling() {
    if (!error.message) {
      return '';
    }

    if (error.message.includes("auth/username")) {
      return "Invalid username, try again";
    }

    if (error.message.includes("auth/user-not-found")) {
      return "No user is connected to this E–Mail"
    }

    if (error.message.includes("auth/wrong-password")) {
      return "Wrong password, please try again";
    }

    if (error.message.includes("auth/internal-error")) {
      return "Please enter a password";
    }
    if(error.message.includes("Authentication failed")) {
      return "Invalid username or password";
    }

    return error.message;
  }


  function handleInputChange() {
    setShowError(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(e);
    setShowError(!!error);
  }

  return (
    <div>
      <div className="container module">
        <p className='pLogin'>Log into your account</p>
        <div className={`error ${showError ? '' : 'errorhidden'}`}>
          {errorHandling()}
        </div>
        <form onSubmit={handleFormSubmit}>
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
    </div>
  );
}

export default LoginView;
