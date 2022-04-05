const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config( { path: './.env' } )

const PORT = 3005

app.use(express.json())
app.use(cors())


const db = mysql.createConnection({

    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
})

//database schema
db.connect(function(err) {
    //console.log("Connected yet no db is selected yet!");
    //db.query("CREATE DATABASE IF NOT EXISTS surreyboard", function (err, result) {
    if (err) throw err;
    console.log("Connected to database");
    //});
    var accounts = "CREATE TABLE IF NOt EXISTS accounts (id INT AUTO_INCREMENT, email TEXT(45), name TEXT(15), password TEXT(15), PRIMARY KEY (id))";
    db.query(accounts, function (err, result) {
      if (err) throw err;
      console.log("Accounts table ok");
    });
    var accounts = "CREATE TABLE IF NOt EXISTS posts (idposts INT AUTO_INCREMENT, title TINYTEXT, text TEXT, PRIMARY KEY (idposts))";
    db.query(accounts, function (err, result) {
      if (err) throw err;
      console.log("Posts table ok");
    });
  });

app.get('/', (req, res)=>{

    res.send('HELLLLLOOOOOO')


})


app.post('/register', (req, res)=>{
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    db.query('INSERT INTO accounts (email, name, password) VALUES (?,?,?)', [email, username, password], (error)=>{
        console.log(error)
    })

})

app.post('/login', (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM accounts where email = ? and password = ?', [email, password], (error, result)=>{
        if(error){
            console.log(error)
            console.send( {error: error} )
        } 
        if(result.length > 0){
                console.log(result)
                res.send(result)
        } else{
            res.send( {message : "Invalid username or pass"} )

        }
        
    })



})
app.post('/createpost', (req, res) => {
    const title = req.body.title
    const text = req.body.text
    

    db.query('INSERT INTO posts (title, text) VALUES (?,?)', [title, text], (error) => {
        console.log(error)
    })

})
//posts page
app.get('/posts', (req, res) => {
    db.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

