import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./../../assets/lws-logo-dark.svg";
const Nav = () => {
  return (
    <>
      <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 items-center">
            <img className="h-10" src={logoImg} alt="Logo" />
            <ul>
              <li className="text-white">
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
