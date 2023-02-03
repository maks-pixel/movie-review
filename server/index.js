const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

//make a .env file to put info for database in so it doesnt get posted up
const db = mysql.createPool({
//sql database infromtation

});

//middleware
app.use(cors());
//use this middlewareto request something from the front end
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    })
});

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err);
    })
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //this would be a get route
    // const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('shrek', 'good movie');";
    // db.query( sqlInsert, (err, result) => {
    //     res.send('hello world');
    // })
    // this is to make sure that the insert into the database works
    // add the correct get / route that is used in the axios function in the front end and match the conformation being passed through
    //---------------------------------------------------------------------------------------------------------------------------------------------
});
app.listen(3001, () => {
    console.log("running on port 3001")
})