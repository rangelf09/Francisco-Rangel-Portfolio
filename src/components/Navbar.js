import React from "react";
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <div className="container-navbar">
            <ul className="nav-tabs">

                <li className="nav-item">
                    <Link to="/" className={window.location.pathname ==="/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/aboutme" className={window.location.pathname ==="/aboutme" ? "nav-link active" : "nav-link"}>
                        About Me
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/portfolio" className={window.location.pathname ==="/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/contact" className={window.location.pathname ==="/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/resume" className={window.location.pathname ==="/resume" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Link>
                </li>

            

            </ul>

        </div>
    )
}

export default function