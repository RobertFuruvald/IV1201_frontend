import './App.css';
import Home from "./views/HomeView";
import LoginView from './views/LoginView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import HeaderView from "./views/HeaderView";
import SignUpView from "./views/SignUpView";
import RequireAuth from "./hooks/requireAuth";
import ContactView from "./views/ContactView";
import RecruiterView from "./views/RecruiterView";
import NotFound from "./views/ErrorView";
import ROLES from "./config/roles";
import ApplicantSubmissionPageView from './views/ApplicantSubmissionPageView';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <HeaderView />
          <Routes>
            <Route path="/signup" element={<SignUpView />} />
            <Route path="/" element={<LoginView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/applicant" element={<RequireAuth allowedRole={ROLES.Applicant}>
              <ApplicantSubmissionPageView />
              </RequireAuth>} />
            <Route path="/recruiter" element={<RequireAuth allowedRole={ROLES.Recruiter}>
              <RecruiterView />
            </RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;