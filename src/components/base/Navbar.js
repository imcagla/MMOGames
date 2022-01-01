import React from 'react'
import {Link} from "react-router-dom"
import routes from '../../routes'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
                        <i className="fas fa-gamepad fa-3x mx-2"></i>
                        <span className="fs-4">MMO Games</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                    {
                                routes.filter(item => item.isNav).map((item,index) => 
                                        <li key={index} className="text-decoration-none nav-item">
                                            <Link  to={item.pathname} className="nav-link text-light" href="#">
                                                {item.title}
                                            </Link>
                                        </li>)
                            }
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
