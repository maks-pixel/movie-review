import React, {useState, useEffect} from "react"
import './App.css';
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () => {
    Axios.post()// add the URL for the insert query to connect to the backend in the server/index.js file
  };

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
        <input type="text" name='review' onChange={(e) => {
          setReview(e.target.value);
        }}
        />

        <button onClick = {submitReview}> submit </button>
      </div>

    </div>
  );
}

export default App;
