import '../styling/signUpView.css';
import React, {useState} from 'react';
import DataSource from '../api/dataSource';
import {useNavigate} from 'react-router-dom';
import useInputChange from "../hooks/useInputChange";

function SignUpView() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [name, setName] = useInputChange('');
  const [surname, setSurname] = useInputChange('');
  const [pnr, setPnr] = useInputChange('');
  const [email, setEmail] = useInputChange('');
  const [username, setUsername] = useInputChange('');
  const [password, setPassword] = useInputChange('');

  const handleSignUp = (e) => {
    e.preventDefault();
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
        console.error('Error:', error.message);
        setError(error.message);
      });
  };


  return (
    <div className="signup-section">
      <form className="signup-container" onSubmit={handleSignUp}>
        <div className="input-group">
          <div className="input-row">
            <input
              placeholder="Name"
              type="text"
              className="input-box"
              onChange={setName}
              required
            />
            <input
              placeholder="Surname"
              type="text"
              className="input-box"
              onChange={setSurname}
              required
            />
          </div>
          <div className="input-row">
            <input
              placeholder="Personal number"
              type="text"
              className="input-box"
              onChange={setPnr}
              required
            />
          </div>
          <div className="input-row">
            <input
              placeholder="Username"
              type="text"
              className="input-box"
              onChange={setUsername}
              required
            />
          </div>
          <div className="input-row">
            <input
              placeholder="Email"
              type="email"
              className="input-box"
              onChange={setEmail}
              required
            />
          </div>
          <div className="input-row">
            <input
              placeholder="Password"
              className="input-box"
              type="password"
              onChange={setPassword}
              autoComplete="new-password"
              required
            />
          </div>
        </div>
        <p className="message-error">{error}</p>
        <button className="login-button" type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default SignUpView;
