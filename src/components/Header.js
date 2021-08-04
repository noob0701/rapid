import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.svg"
const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="navbar-brand-img" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                        <a className="btn btn-primary ms-auto" href="#" target="_blank">
                            Buy now
                        </a>
                    </div>
                </div>
            </nav>
    )
}

export default Header
