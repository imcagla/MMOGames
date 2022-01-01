import React from 'react'
import GameSearch from './GameSearch'


function Home() {
    

    return (
        <div className='text-center my-5' >
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.mmobomb.com/g/1/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.mmobomb.com/g/7/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.mmobomb.com/g/77/thumbnail.jpg" width="500" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            <GameSearch />
        </div>
    )
}

export default Home
