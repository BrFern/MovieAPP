import React from 'react'

export default function MovieDisplay ({movie}) {
  const loaded = () => {
  return (
    <>
    <h1>{movie.Title}</h1>
    <h2>{movie.Genre}</h2>
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Year}</h2>
  </>

  );
};

//functioni to return loading JSX
const loading = () => {
  return <h1>No movie to Display</h1>;

};
//Ternary operator will determine whiich functions JSX we will return
return movie ? loaded() : loading();

};

//We must export the component to use it in other files
// export default MovieDisplay;

