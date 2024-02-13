import './App.css';
import Home from "./views/HomeView";
import LoginView from './views/LoginView';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";
import HeaderView from "./views/HeaderView";
import SignUpView from "./views/SignUpView";
import ApplicantSubmissionPageView from './views/ApplicantSubmissionPageView';

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
                  <HeaderView />
                  <Routes>
                  <Route path="/signup" element={<SignUpView />} />
                  <Route path="/" element={<LoginView />} />
                  <Route path="/hello" element={<Home />} />
                  <Route path="/application/submission" element={<ApplicantSubmissionPageView />} />
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