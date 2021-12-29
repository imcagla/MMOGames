import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate, Link} from "react-router-dom"
import GameCard from './GameCard';


function GameSearch() {
    const location = useLocation();
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(location.search)

    const [searchValue, setSearchValue] = useState(urlParams.get('q'))

    function handleSubmit(e) {
        e.preventDefault()
        const inputVal = e.target.q.value;

        if(inputVal === "") return false

        setSearchValue(inputVal)
        navigate(`/search?q=${inputVal}`)
    }

    const [data, setData] = useState([])
    const [filteredData] = useState([])
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

    return (
        <div className='container my-5'>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" id="search" name="q" defaultValue={searchValue} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-info" type="submit">
                    Search
                </button>
            </form>
            {location.pathname === '/search' && (
                <div>
                    <p className='text-muted my-3' >Search Results for <italic className="fst-italic">{searchValue}</italic> : </p>
                    <p>{loading && "loading..."}</p>
                    <div className='row'>
                    {
                        data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.genre.toLowerCase().includes(searchValue.toLowerCase())).map(item => <GameCard 
                            id={item.id} 
                            title={item.title} 
                            thumbnail={item.thumbnail} 
                            genre={item.genre} 
                            shortDescription={item.short_description} 
                        />
                            ) 
                    } 
                    {
                        data.some(item => (item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.genre.toLowerCase().includes(searchValue.toLowerCase()))) ? "" : <h5 className='text-light my-5 text-center py-5'>No results found for the search "{searchValue}"</h5>
                    }
                    </div>
                </div>  
            )}
        </div>
    )
}

export default GameSearch


{/* <div key={item.id} className="card col-sm-3">
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
                                </div> */}