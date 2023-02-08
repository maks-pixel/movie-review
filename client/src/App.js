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
  });
  //originally using a .then but that made it so you had to reload the page to have the movie update
    setMovieList([... movieReviewList, {movieName: movieName, movieReview: movieReview},
    ]);
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
          return (
          <div className="card">
            <h1>{val.movie_name}</h1>
            <p> Movie Review: {val.movie_review}</p>
            <button>delete</button>
            <button>update</button>
            </div>)
        })}   
        </div>
    </div>
  );
}

export default App;
