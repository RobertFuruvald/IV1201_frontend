import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for authentication data
const AuthContext = createContext(null);

// Create an authentication provider component
function AuthProvider({ children }) {
  // State variables for token and user information
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [user, setUsername] = useState(null)
  // Access the navigation function from React Router
  const navigate = useNavigate();

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
        const res = await response.text();
        // Set the token and username in state
        setToken(res);
        setUsername(data.username);
        // Save the token to local storage
        localStorage.setItem("site", res);
        // Navigat the user
        navigate("/hello");
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
    localStorage.removeItem("site");
    navigate("/");
  };
  // Provide authentication data to child components through context

  return (
    <AuthContext.Provider value={{ user, token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
};
