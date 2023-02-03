import React, {useState, useEffect, isValidElement} from "react"
import './App.css';
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [movieReview, setMovieReview] = useState('')
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get ('http://localhost:3001/api/get').then((response) => {
      //console.log(response.data);
      setMovieList(response.data)
    })
  })

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {movieName: movieName, movieReview: movieReview
  }).then(() => {
    alert('successful insert to database')
  })
  // add the URL for the insert query to connect to the backend in the server/index.js file
  };
  //make sure that when mapping the response from the get function connected to the back end you match the value names used in the console.log 
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className='form'>
        <label> Movie Name: </label>
        <input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value);
        }}
        />
        <label> Review: </label>
        <input type="text" name='movieReview' onChange={(e) => {
          setMovieReview(e.target.value);
        }}
        />

        <button onClick = {submitReview}> submit </button>
        
        {movieReviewList.map((val) => {
          return<h1>Movie Name: {val.movie_name} | Movie Review: {val.movie_review}</h1>
        })}   
        </div>
    </div>
  );
}

export default App;
