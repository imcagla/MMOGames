import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

function Games() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mmo-games.p.rapidapi.com/games", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                        "x-rapidapi-key": "8c598069f1msh851f19ab6d8c51ep1bf565jsn69db72100df9"
                    }
                })
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setLoading(false)
            }).catch((error)=>{
                console.log("Api call error ", error.message);
            })
    })

    if(loading) return <h1>Loading...</h1>

    return (
        <div className="container">
            <div className='row'>
            {
                data.map(item => <div key={item.id} className="card col-sm-3">
                                    <img src={item.thumbnail} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between" >
                                            <h5 className="card-title">{item.title}</h5>
                                            <h6 className='text-muted'> {item.genre} </h6>
                                        </div>
                                        <p className="card-text small">{item.short_description}</p>
                                        <Link to={`/games/${item.id}`} className="btn btn-primary">
                                            See Detail
                                        </Link>
                                    </div>
                                </div>
                        )
            }
            </div>
        </div>
        
    )
}

export default Games
