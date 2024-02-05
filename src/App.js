import logo from './logo.svg';
import './App.css';
import LoginPresenter from "./presenters/LoginPresenter";
import HomePresenter from "./presenters/HomePresenter";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";
function App() {
  return (
    <div className="App">

{/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      {
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginPresenter/>}/>
              <Route path="/hello" element={<HomePresenter/>}/>
            </Routes>
          </AuthProvider>
        </Router>


      }

    </div>
  );
}

export default App;
