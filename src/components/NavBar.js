import React from "react"
import {NavLink} from 'react-router-dom'

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            React Note App
        </div>

        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Main Page</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">Information</NavLink>
        </li>
      </ul>

    </nav>
)
