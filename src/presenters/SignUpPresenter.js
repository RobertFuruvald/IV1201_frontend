import React, { useState } from 'react';
import SignUpView from '../views/SignUpView';
import DataSource from '../hooks/dataSource';
import { useNavigate } from 'react-router-dom';

function SignUpPresenter() {
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
    <div>
      <SignUpView
        errorText={error}
        onCreate={handleSignUp}
        onName={(name) => setName(name)}
        onSurname={(surname) => setSurname(surname)}
        onPnr={(pnr) => setPnr(pnr)}
        onEmail={(email) => setEmail(email)}
        onUsername={(username) => setUsername(username)}
        onPassword={(password) => setPassword(password)}
      />
    </div>
  );
}

export default SignUpPresenter;
