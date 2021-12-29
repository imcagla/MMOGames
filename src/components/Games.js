import React, {useEffect, useState} from 'react'
import GameCard from './GameCard';
import {Link} from "react-router-dom"
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

    if(loading) return <h1 className='text-secondary'>Loading...</h1>

    return (
        <div className="container">
            <div className='row'>
            <table class="table table-dark">
            <thead className='text-info'>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) =>  <tr>
                                        <th scope="row">{index+1}</th>
                                        <td> <img src={item.thumbnail} alt="" width="200" /></td>
                                        <td>{item.title} <p className='text-muted'>{item.genre}</p></td>
                                        
                                        <td>{item.short_description}</td>
                                        <td><Link to={`/games/${item.id}`} className="btn btn-outline-info w-100">
                                                See Detail
                                            </Link></td>
                                    </tr>
                    )
                }
                </tbody>
              </table>
            </div>
        </div>
        
    )
}

export default Games

{/* <GameCard 
                    id={item.id} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    genre={item.genre} 
                    shortDescription={item.short_description} 
                /> */}