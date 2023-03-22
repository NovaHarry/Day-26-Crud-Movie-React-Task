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
                <Card.Body>
                    <div className="user-card">
                        <h1>{movies.name}</h1>
                        <p>genre : {movies.genre}</p>
                        <p>rating : {movies.rating}</p>
                        <p>released : {movies.released}</p>
                        </div>
                        </Card.Body>
                        <Card.Footer className="footer">
                        <button className="btn card-btn footer-button"
                        onClick={()=>history.push(`/edit/${movies.id}`)}
                        >
                        Edit</button>
                        </Card.Footer>
                    
                    </Card>
        </div>
        </BaseApp>
    )
}