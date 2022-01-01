import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom"
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
    }, [])

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
                    <p className='text-muted my-3' >Search Results for <span className="fst-italic">{searchValue}</span> : </p>
                    <p>{loading && "loading..."}</p>
                    <div className='row'>
                    {
                        data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.genre.toLowerCase().includes(searchValue.toLowerCase())).map(item => <GameCard 
                            key={item.id}
                            id={item.id} 
                            title={item.title} 
                            thumbnail={item.thumbnail} 
                            genre={item.genre} 
                            shortDescription={item.short_description} 
                        />) 
                    } </div>
                    <div className='row justify-content-center'>
                    {
                        data.some(item => (item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.genre.toLowerCase().includes(searchValue.toLowerCase()))) ? "" : <div className='alert alert-danger col-6 text-center py-5 mt-5' role="alert">No results found for the search "{searchValue}"</div>
                    }
                    </div>
                </div>  
            )}
        </div>
    )
}

export default GameSearch
