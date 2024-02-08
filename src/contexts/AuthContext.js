import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [user, setUsername] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL + "/api/auth/login";
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.text();
        setToken(res);
        setUsername(data.username);
        localStorage.setItem("site", res);
        navigate("/hello");
      } else {
        throw new Error('Authentication failed');
      }
    } catch (err) {
      throw new Error('Authentication failed');
    }
  };

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
