import React, {useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom"

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

    return (
        <div className='container my-4'>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" id="search" name="q" defaultValue={searchValue} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">
                    Search
                </button>
            </form>
            {location.pathname === '/search' && <h1>Search Results {searchValue}</h1>}
        </div>
    )
}

export default GameSearch
