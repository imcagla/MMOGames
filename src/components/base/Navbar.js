import React from 'react'
import {Link} from "react-router-dom"
import routes from '../../routes'

function Navbar() {
    return (
        <div>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
                    <i className="fas fa-gamepad fa-3x mx-2"></i>
                    <span className="fs-4">MMO Games</span>
                </Link>
                <ul className="nav nav-pills">
                {
                                routes.filter(item => item.isNav).map((item,index) => 
                                        <li key={index} className="text-decoration-none nav-item">
                                            <Link  to={item.pathname} className="nav-link text-light" href="#">
                                                {item.title}
                                            </Link>
                                        </li>)
                            }
                </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar
