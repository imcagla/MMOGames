import React from 'react'
import {Link} from "react-router-dom"
import routes from '../../routes'

function Navbar() {
    return (
        <div>
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
                    <i class="fas fa-gamepad fa-3x mx-2"></i>
                    <span class="fs-4">MMO Games</span>
                </Link>
                <ul class="nav nav-pills">
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
