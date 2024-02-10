import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/headerView.css';

function HeaderView(props) {
  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/alternativ1" className="active">
              Alternativ 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/alternativ2" className="active">
              Alternativ 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/alternativ3" className="active">
              Alternativ 3
            </NavLink>
          </li>
          {props.isLoggedIn ? (
            <>
              <li>
                <span className="user-info">
                  Welcome: {props.username} ({props.role})
                </span>
              </li>
              <li>
                <NavLink to="/" onClick={props.onLogout} className="active">
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
