import React from 'react'
import {Link} from "react-router-dom"
import routes from '../../routes'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            routes.filter(item => item.isNav).map((item,index) => 
                                    <Link key={index} to={item.pathname} className="text-decoration-none nav-item">
                                        <a className="nav-link" href="#">
                                            {item.title}
                                        </a>
                                    </Link>)
                        }
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navbar
