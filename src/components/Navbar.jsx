import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <NavLink
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        to="/">
        <p className="blue-gradient_text">AA</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }>
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }>
          projects
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar