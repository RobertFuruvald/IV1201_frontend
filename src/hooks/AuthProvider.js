import {useContext, createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

function AuthProvider({ children }){
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [user, setUsername] = useState(null)
  const navigate = useNavigate();
  const login = async (data) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(URL + "api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.text();
        setToken(res);
        setUsername(data.username);
        localStorage.setItem("site", res);
        return;
      }
      throw new Error('Authentication failed');
    }catch (err) {
      throw new Error('Authentication failed');
    }

  }
  const logOut = () => {
    setToken("");
    setUsername("");
    localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;

export function useAuth(){
  return useContext(AuthContext);
};
