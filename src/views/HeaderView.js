import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/headerView.css';
import { useAuth } from "../hooks/useAuth";
import useCheckUserRole from '../hooks/useCheckUserRole';

function HeaderView(props) {
  const auth = useAuth();

  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li>
          <NavLink to={`/${auth.role}`} className="active">
              Home
            </NavLink>
          </li>
          {<li>
            <NavLink to="contact" className="active">
            Contact 
            </NavLink>
          </li>}
 
          {auth.token ? (
            <>
              <li>
                <span className="user-info">
                  Welcome: {auth.user} ({auth.role})
                </span>
              </li>
              <li>
                <NavLink to="/" onClick={() => auth.logOut()} className="active">
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className="active">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="active">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderView;