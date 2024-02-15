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
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (!name || !surname || !pnr || !email || !username || !password) {
        setError('All fields are required');
        return;
      }

      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
        setError('Invalid email format');
      return;
      }
    const signUpData = {name, surname, pnr, email, username, password};
      const response = await DataSource.registerUser(signUpData);
      console.log('Registration successful:', response);
      navigate('/');

    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }

  };


  return (
    <>
      <div>
        <div className="container module">
          <p className='pSignup'>Create an account</p>
          <div className={`error ${error ? '' : 'error-hidden'}`}>{error}</div>

          <form onSubmit={handleSignUp}>
            <input
              placeholder="Name"
              type="text"
              className="signup-input"
              onChange={setName}
              required
            />
            <input
              placeholder="Surname"
              type="text"
              className="signup-input"
              onChange={setSurname}
              required
            />
            <input
              placeholder="Personal number"
              type="text"
              className="signup-input"
              onChange={setPnr}
              required
            />
            <input
              placeholder="Username"
              type="text"
              className="signup-input"
              onChange={setUsername}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="signup-input"
              onChange={setEmail}
              required
            />
            <input
              placeholder="Password"
              className="signup-input"
              type="password"
              onChange={setPassword}
              autoComplete="new-password"
              required
            />
            <button type="submit">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpView;