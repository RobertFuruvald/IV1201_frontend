import { useContext, createContext, useState } from "react";

// Create a context for authentication data
const AuthContext = createContext(null);

// Create an authentication provider component
function AuthProvider({ children }) {
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
        setRole(res.roles);
        // Save the token to local storage
        sessionStorage.setItem("site", res.token);
        sessionStorage.setItem("role", res.roles);
        sessionStorage.setItem("user", data.username);
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


export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
};
