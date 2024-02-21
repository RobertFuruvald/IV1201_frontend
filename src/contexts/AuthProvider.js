import { useContext, createContext, useState } from "react";
import ROLES from "../config/roles";
import { useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";
// Create a context for authentication data
export const AuthContext = createContext(null);

// Create an authentication provider component
export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();
  // State variables for token and user information
  const [token, setToken] = useState(sessionStorage.getItem("site") || "");
  const [user, setUsername] = useState(sessionStorage.getItem("user") || "");
  const [role, setRole] = useState(sessionStorage.getItem("role") || "");
  // Access the navigation function from React Router

  // Function to handle user login
  const login = async (data) => {
    try {
      // Fetch the backend URL from environment variables
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(URL + "api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(data),
      });
      // If the login request is successful
      if (response.ok) {
        const res = await response.json();
        // Set the token and username in state
        setUsername(data.username);
        setToken(res.token);
        setRole(res.roles[0])
        // Save the token to local storage
        sessionStorage.setItem("site", res.token);
        sessionStorage.setItem("role", res.roles[0]);
        sessionStorage.setItem("user", data.username);

        if (res.roles[0] === ROLES.Applicant) {
          navigate("/applicant");
        } else if (res.roles[0] === ROLES.Recruiter) {
          navigate("/recruiter");
        }
        return;
      }
      // If authentication fails, throw the error
      throw new Error('Authentication failed');
    } catch (err) {
      throw new Error('Authentication failed');
    }

  }
  // Function to handle user logout
  const logOut = () => {
    // Clear token, username, and local storage
    setToken("");
    setUsername("");
    setRole("");
    sessionStorage.removeItem("site");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
  };
  // Provide authentication data to child components through context

  return (
    <AuthContext.Provider value={{ user, token, role, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};