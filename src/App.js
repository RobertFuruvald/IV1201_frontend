import logo from './logo.svg';
import './App.css';
import LoginPresenter from "./presenters/LoginPresenter";
import HomePresenter from "./presenters/HomePresenter";
import HeaderPresenter from "./presenters/HeaderPresenter";
import SignUpPresenter from "./presenters/SignUpPresenter";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="*"
              element={
                <div>
                  <HeaderPresenter />
                  <Routes>
                    <Route path="/" element={<LoginPresenter />} />
                    <Route path="/signup" element={<SignUpPresenter />} />
                    <Route path="/hello" element={<HomePresenter />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
