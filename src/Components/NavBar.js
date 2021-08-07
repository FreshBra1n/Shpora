import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/logo192.png'


export const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="logo" width={30} height={30} />
                React
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to="/components" exact>Components</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/state_props">{`State&Props`}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Link</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" to="">Action</a></li>
                            <li><a className="dropdown-item" to="">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" to="">Something else here</a></li>
                        </ul>
                    </li> */}

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
)
