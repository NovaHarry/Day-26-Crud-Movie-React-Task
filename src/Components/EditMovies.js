import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";

const EditMovie = ({movie, setMovie}) =>{
    const history = useHistory();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [released, setReleased]= useState("");

    const {id} = useParams();

    const selectedMovie = movie.find((mov) => mov.id === id);
    
    useEffect(()=>{
        setIdx(selectedMovie.id)
        setName(selectedMovie.name)
        setGenre(selectedMovie.genre)
        setRating(selectedMovie.rating)
        setReleased(selectedMovie.released)
    },[]);

    const updateMovie = ()=>{

        const editIndex = movie.findIndex(mov => mov.id === id);

        const updatedData ={
            id: idx,
            name,
            genre,
            rating,
            released
        }

        movie[editIndex] = updatedData;
        setMovie([...movie]);
        history.push('/');

    }

    return(
        <BaseApp
        title = "Edit Movie Details">
        <div>
                <input 
                placeholder="id"
                value = {idx}
                onChange={(e)=>setIdx(e.target.value)}
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
                placeholder="released date"
                value = {released}
                onChange={(e)=>setReleased(e.target.value)}
                />
                <button
                onClick={updateMovie}
                >Update</button>
        </div>
        </BaseApp>
    )
}
export default EditMovie;