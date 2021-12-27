import React from 'react'
import {Link} from "react-router-dom"
import routes from '../../routes'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">MMOGames</Link>
                    <div>
                        <ul className="navbar mb-2 mb-lg-0">
                            {
                                routes.filter(item => item.isNav).map((item,index) => 
                                        <Link key={index} to={item.pathname} className="text-decoration-none nav-item">
                                            <a className="nav-link text-light" href="#">
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
