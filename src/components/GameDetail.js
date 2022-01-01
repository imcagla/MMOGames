import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "../styles/games.css"

function GameDetail() {
    const params = useParams();

    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState([])
    const URL = `https://mmo-games.p.rapidapi.com/game?id=${params.gameId}`

    useEffect(() => {
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "8c598069f1msh851f19ab6d8c51ep1bf565jsn69db72100df9"
            }
        })
            .then((response) => response.json())
            .then(json => {setGame(json)
            setLoading(false)})
    }, [URL])

    if(loading) return <h1 className='text-secondary text-center my-5'>Loading...</h1>

    return (
        <div className='container'>
            Game Detail
            <div className="col text-center">
                <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{game.title}</h1>
                    <h6 className="card-subtitle mb-2">
                    Genre: {game.genre}
                    </h6>
                    <p>{game.short_description}</p>
                    <img className='my-3 img-fluid' src={game.thumbnail} alt={game.title} />
                    <div className='text-center'>
                        <ul className="list-unstyled text-start d-inline-block">
                            <li><strong>Platform:</strong> <span className='ms-1'>{game.platform}</span> </li>
                            <li><strong>Publisher:</strong> <span className='ms-1'>{game.publisher}</span> </li>
                            <li><strong>Developer:</strong> <span className='ms-1'>{game.developer}</span> </li>
                            <li><strong>Release Date:</strong> <span className='ms-1'>{game.release_date}</span> </li>
                        </ul>
                    </div>
                    
                    <p className="card-text">{game.body}</p>
                    <a href={game.game_url} target="_blank" rel="noreferrer" className='btn btn-lg btn-outline-primary mb-4' >Play Now!</a>
                </div>
                </div>
            </div>
        </div>
    )
}
// {
//     "id": 1,
//     "title": "Dauntless",
//     "thumbnail": "https://www.freetogame.com/g/1/thumbnail.jpg",
//     "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
//     "game_url": "https://www.freetogame.com/open/dauntless",
//     "genre": "MMORPG",
//     "platform": "PC (Windows)",
//     "publisher": "Phoenix Labs",
//     "developer": "Phoenix Labs, Iron Galaxy",
//     "release_date": "2019-05-21",
//     "freetogame_profile_url": "https://www.freetogame.com/dauntless"
// },
export default GameDetail
