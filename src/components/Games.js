import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/games.css"

function Games() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

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
    }, [])

    if(loading) return <h1 className='text-secondary text-center my-5'>Loading...</h1>

    return (
        <div className="container">
            <div className='row my-4'>
            <table className="table table-dark table-hover table-bordered border-info align-middle">
            <thead className='text-info'>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) =>  <tr key={index} >
                                        <th scope="row">{index+1}</th>
                                        <td> <img src={item.thumbnail} alt={item.title} className='img-fluid' width="200" /></td>
                                        <td>{item.title} <p className='text-muted'>{item.genre}</p> </td>
                                        
                                        <td> 
                                            <span className="body-overflow"> {item.short_description}</span>
                                            <span onClick={() => navigate(`${index+1}`)} ><i className="fas fa-angle-double-right cursor-pointer float-end text-info"></i></span>
                                        </td>

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
