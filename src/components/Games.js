import React, {useEffect, useState} from 'react'
import GameCard from './GameCard';
import "../styles/games.css"

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
                data.map(item => <GameCard 
                    id={item.id} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    genre={item.genre} 
                    shortDescription={item.short_description} 
                />
                        )
            }
            </div>
        </div>
        
    )
}

export default Games
