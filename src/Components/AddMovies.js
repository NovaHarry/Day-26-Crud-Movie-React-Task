import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";


export function AddMovie({movie, setMovie}){

    const history = useHistory();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [released, setReleased]= useState("");

    const addNewMovie =()=>{
        const newMovie ={
            id,
            name,
            genre,
            rating,
            released
        }
        setMovie([...movie,newMovie]);
        history.push('/');
    }
    return(
        <BaseApp
        title = "Add new Movie or Series">
        <div>
                <input 
                placeholder="id"
                value = {id}
                onChange={(e)=>setId(e.target.value)}
                />
                <input 
                placeholder="name"
                value = {name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input 
                placeholder="genre"
                value = {genre}
                onChange={(e)=>setGenre(e.target.value)}
                />
                <input 
                placeholder="rating"
                value = {rating}
                onChange={(e)=>setRating(e.target.value)}
                />
                <input 
                placeholder="released"
                value = {released}
                onChange={(e)=>setReleased(e.target.value)}
                />
                <button
                onClick={addNewMovie}>Add</button>
        </div>
        </BaseApp>
    )

}