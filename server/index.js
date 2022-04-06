const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const mongoose = require('mongoose')
const AccountsModel = require('./models/accounts')
const PostsModel = require('./models/posts')

const dotenv = require('dotenv')
const Accounts = require('./models/accounts')
dotenv.config( { path: './.env' } )

const PORT = 3005

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://newuser:newpassword@cluster0.mmkhh.mongodb.net/surreyboard?retryWrites=true&w=majority",
 {
  useNewUrlParser: true,
});


//const db = mysql.createConnection({

    //host: process.env.DATABASE_HOST,
    //user: process.env.DATABASE_USER,
    //password : process.env.DATABASE_PASSWORD,
    //database : process.env.DATABASE
//})

//database schema
//db.connect(function(err) {
    //if (err) throw err;
    //console.log("Connected to database");
    //var accounts = "CREATE TABLE IF NOt EXISTS accounts (id INT AUTO_INCREMENT, email TEXT(45), name TEXT(15), password TEXT(15), PRIMARY KEY (id))";
    //db.query(accounts, function (err, result) {
      //if (err) throw err;
      //console.log("Accounts table ok");
    //});
    //var accounts = "CREATE TABLE IF NOt EXISTS posts (idposts INT AUTO_INCREMENT, title TINYTEXT, text TEXT, PRIMARY KEY (idposts))";
    //db.query(accounts, function (err, result) {
      //if (err) throw err;
      //console.log("Posts table ok");
    //});
  //});

app.get('/', async (req, res)=>{
    //const accounts = new AccountsModel({ email: "test1@email.com", username: "test1", password: "test1"});

    
    //try {
        //await accounts.save();
        //res.send('Inserted into accounts')
    
    //} catch (err) {
        //console.log(err);
    //}
});


app.post('/register', async (req, res)=>{
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    const createaccount = new AccountsModel({ email: email, username: username, password: password});
    try {
        await createaccount.save();
        res.send('Inserted into accounts')
    } catch (err) {
        console.log(err);
    }
    });

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
   

//
app.post('/createpost', async (req, res) => {
    const title = req.body.title
    const text = req.body.text

    const createpost = new PostsModel({ title: title, text: text});
    try {
        await createpost.save();
        res.send('Inserted into posts')
    } catch (err) {
        console.log(err);
    }
    });


//posts page
app.get('/posts', async (req, res) => {
   PostsModel.find({}, (err, result)=>{
       if (err){
           res.send(err)
       }
       res.send(result)
   })
});
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

