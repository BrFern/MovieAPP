import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import {useState, useEffect} from 'react';

export default function App() {

  //variable with api key
  const apiKey = "468eaee9"

  //state to hold movie data
  const [movie, setMovie] = useState(null);

  //function to getMovie
  const getMovie = async(searchTerm) => {
    //make fetch request and store response
    try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
  //Parse JSON response into a JS object
  const data = await response.json();
  //Set the movie state to the movie
  setMovie(data);

  } catch(event) {
    console.error(event)
  }
};


//This will run on the first render but no on subsuquent renders
useEffect(() => {
  getMovie("Clueless");
}, []);


  return (
    <div className="App">
     <Form movieSearch={getMovie}/>
     <MovieDisplay movie ={movie} />
  
    </div>
  );
}

// export default App;
