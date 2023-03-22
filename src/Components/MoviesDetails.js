import React from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";


export function MoviesDetails({movie}){
    const {id} =  useParams();
    const movies = movie[id];
    const history = useHistory();
    return (
        <BaseApp
        title = "Movie & Series">
        <div className="user-content">
            <Card>
                    <div className="user-card">
                        <h1>{movies.name}</h1>
                        <p>genre : {movies.genre}</p>
                        <p>rating : {movies.rating}</p>
                        <p>released : {movies.released}</p>
                        <button className="btn card-btn"
                        onClick={()=>history.push(`/edit/${movies.id}`)}
                        >
                        Edit</button>
                    </div>
                    </Card>
        </div>
        </BaseApp>
    )
}