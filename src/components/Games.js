import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

function Games() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games")
            .then((response) => response.json())
            .then((json) => {
                console.log("JSON",json)
                setData(json)
                setLoading(false)
            }).catch((error)=>{
                console.log("Api call error ", error.message);
            })
    })

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            {
                data.map(item => <div key={item.id} class="card">
                                    <img src={item.thumbnail} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.short_description}</p>
                                        <Link to={`/games/${item.id}`} class="btn btn-primary">
                                            See Detail
                                        </Link>
                                    </div>
                                </div>
                        )
            }
        </div>
    )
}

export default Games
