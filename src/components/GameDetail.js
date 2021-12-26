import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"


function GameDetail() {
    const params = useParams();

    const [game, setGame] = useState([])

    useEffect(() => {
        const URL = `https://www.freetogame.com/api/game?id=${params.gameId}`

        fetch(URL)
            .then(resp => resp.json)
            .then(json => setGame(json))
    }, [])

    return (
        <div>
            Game Detail
            <div className="col">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{game.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                    Genre: {game.genre}
                    </h6>
                    <p>{game.short_description}</p>
                    <img src={game.thumbnail} alt="" />
                    <ul>
                        <li>Platform: {game.platform}</li>
                        <li>Publisher: {game.publisher}</li>
                        <li>Developer: {game.developer}</li>
                        <li>Release Date: {game.release_date}</li>
                    </ul>
                    <p class="card-text">{game.body}</p>
                    <a href={game.game_url} className='btn btn-outline-primary' >Play Now!</a>
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
