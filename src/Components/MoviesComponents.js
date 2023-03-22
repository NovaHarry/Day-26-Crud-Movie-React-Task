import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";

export default function UserComponent({movie, setMovie}) {
    const history = useHistory();
    

    const deleteMovie = (idx)=>{
    const deletedMoviedata = movie.filter((mov)=>mov.id !== idx)
    setMovie(deletedMoviedata);

}
return (
        <BaseApp
            title="Movie Details">
            <div className="user-content">
                {movie.map((movies, idx) => (
                    <Card>
                    <Card.Body>
                        <div key = {idx}className="user-card">
                        <h1>{movies.name}</h1>
                        <p>Genre : {movies.genre}</p>
                        <p>Rating : {movies.rating}</p>
                        <p>Released : {movies.released}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="footer">
                    <div className="btn-group">
                       <button className="btn card-btn"
                       onClick={()=>history.push(`/movie/${idx}`)}
                       >
                        View</button>
                        <button className="btn card-btn"
                        onClick={()=>history.push(`/edit/${movies.id}`)}
                        >
                        Edit</button>
                        <button className="btn del-btn"
                        onClick={()=>deleteMovie(movies.id)}
                        >Delete</button>
                    </div>
                    </Card.Footer>
                    </Card>
                ))}
            </div>
        </BaseApp>
    )
}