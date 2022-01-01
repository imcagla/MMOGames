import React from 'react'
import GameSearch from './GameSearch'


function Home() {
    

    return (
        <div className='text-center my-5' >
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.mmobomb.com/g/1/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.mmobomb.com/g/7/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.mmobomb.com/g/77/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            <GameSearch />
        </div>
    )
}

export default Home
