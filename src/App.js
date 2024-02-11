import './App.css';
import Home from "./views/HomeView";
import LoginView from './views/LoginView';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";



// Define the main App component
function App() {
  return (
    <div className="App">

      {
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginView/>}/>
              <Route path="/hello" element={<Home/>}/>
            </Routes>
          </AuthProvider>
        </Router>


      }

    </div>
  );
}

export default App;
