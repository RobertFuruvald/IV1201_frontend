import '../styling/signUpView.css';
import React, { useState } from 'react';
import DataSource from '../api/dataSource';
import { useNavigate } from 'react-router-dom';
import {useInputChange} from "../hooks/useInputChange";
function SignUpView(props) {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [pnr, setPnr] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
     setError('');
     if (!name || !surname || !pnr || !email || !username || !password) {
         setError('All fields are required');
          return;
      }

     if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)){
       setError('Invalid email format');
      return;
     }

      const signUpData = { name, surname, pnr, email, username, password };

      DataSource.registerUser(signUpData)
      .then(response => {
       console.log('Registration successful:', response);
        navigate('/');
        return response;
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.toString().substring(6));
      });
  };


  return (
    <div className="signup-section">
      <form className="signup-container" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <div className="input-row">
            <input
              placeholder="NAME"
              type="text"
              className="input-box"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="SURNAME"
              type="text"
              className="input-box"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="PERSONAL NUMBER"
              type="text"
              className="input-box"
              onChange={(e) => setPnr(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="USERNAME"
              type="text"
              className="input-box"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="EMAIL"
              type="email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="PASSWORD"
              className="input-box"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>
        <p className="message-error">{error}</p>
        <button className="login-button" onClick={handleSignUp}>
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default SignUpView;
