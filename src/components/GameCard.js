import React from 'react'
import {Link} from "react-router-dom"

function GameCard(props) {

    return (
            <div key={props.id} className='col-lg-3 col-md-4 col-sm-6'>
                                    <div className="card g-0 my-3 border border-info">
                                        <img src={props.thumbnail} className="card-img-top" alt={`${props.title}thumbnail`}/>
                                        <div className="card-body bg-dark text-light">
                                            <div className="d-flex align-items-center justify-content-between card-title" >
                                                <h5 >{props.title}</h5>
                                                <small className='text-muted fw-bold'> {props.genre} </small>
                                            </div>
                                            <p className="card-text small  body-overflow">{props.shortDescription}</p>
                                            <Link to={`/games/${props.id}`} className="btn btn-outline-info w-100">
                                                See Detail
                                            </Link>
                                        </div>
                                    </div>
                                </div> 
       
    )
}

export default GameCard
