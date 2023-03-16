import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          Sort Number
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="navbar-brand" to="/tab">
              Find Race
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
