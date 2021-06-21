import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="nav-bar">
      <NavLink
          to="/"
          exact
          activeStyle={{textDecoration: 'none'}}
          style={{textDecoration: 'none'}}
      >
      <ul>
        <li className="nav-item">
          <h2>Joyce's Notes</h2>
          {/* If working on user signin deliverable, change user name above */}
        </li>
      </ul>
      </NavLink>
    </div>
  );
}

export default Header;
