import React, {useEffect, useState} from "react";
import '../styling/homeView.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/AuthProvider";
// Define the HomeView component
export default function HomeView() {
// State variable for backend response storage
  const [res, setRes] = useState('');
  // Access the navigate function from React Router
  const navigate = useNavigate();
  // Access authentication data using the useAuth hook
  const auth = useAuth();

  // Effect hook to fetch data from the backend.
  useEffect(() => {
    // Check the user is authenticated
    if (auth.token) {
      // Fetch the data from the backend
      const url = process.env.REACT_APP_BACKEND_URL;
      fetch(`${url}hello`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
      })
        // Set the response data in state
        .then(response => response.text())
        .then(data => {
          setRes(data)
        })
        .catch(error => console.error("Error: " + error.message));
    }
    // If the user is not authenticated, redirect them to the home page
    else {
      navigate("/");
    }
  }, [auth.token, navigate]);

  // Render the HomeView component with relevant props
  return (
    <div>
      <h1>{res}</h1>
      <h2>Welcome! {auth.user} </h2>
      <button type="button" onClick={auth.logOut}>Logout</button>
    </div>
  );
}
