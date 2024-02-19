import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/headerView.css';
import { useAuth } from "../hooks/useAuth";
import useCheckUserRole from '../hooks/useCheckUserRole';

function HeaderView(props) {
  const auth = useAuth();
  const { role } = useAuth;

  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          {useCheckUserRole("applicant") && <li>
            <NavLink to="/application" className="active">
              Application
            </NavLink>
          </li>}
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