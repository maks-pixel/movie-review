const express = require('express')
const app = express()
const mysql = require('mysql')

//make a .env file to put info for database in so it doesnt get posted up
const db = mysql.createPool({
//sql database infromtation

});

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('shrek', 'good movie');";
    // db.query( sqlInsert, (err, result) => {
    //     res.send('hello world');
    // })
    // this is to make sure that the insert into the database works
    // add the correct get / route that is used in the axios function in the front end and match the conformation being passed through

});
app.listen(3001, () => {
    console.log("running on port 3001")
})