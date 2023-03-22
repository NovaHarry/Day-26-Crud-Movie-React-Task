import './App.css';
import MoviesComponent from './Components/MoviesComponents';
import { Route, Switch } from 'react-router-dom';
import { AddMovie } from './Components/AddMovies';
import { data } from './Components/Data';
import { useState } from 'react';
import { MoviesDetails } from './Components/MoviesDetails';
import EditMovies from './Components/EditMovies';


function App() {
  const [movie, setMovie] = useState(data);
  return (
    <div className="App">

      <Switch>
        <Route exact path = "/">
        <MoviesComponent
        movie = {movie}
        setMovie = {setMovie}/>
        </Route>
        <Route path = "/add/movie">
          <AddMovie
          movie = {movie}
          setMovie = {setMovie}/>
        </Route>
        <Route path="/movie/:id">
          <MoviesDetails
          movie={movie}/>
        </Route>
        <Route path="/edit/:id">
          <EditMovies
          movie = {movie}
          setMovie = {setMovie}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
