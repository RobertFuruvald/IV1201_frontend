import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Corrected import path
import LoginView from "./views/LoginView";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider> {/* Correct usage based on the corrected import */}
          <Routes>
            <Route path="/" element={<LoginView />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
