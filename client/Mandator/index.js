
// module required
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// setting connection to sql serve 
app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviemanagementsystem",
});



// creating end point for user registsration 
app.post("/create", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;
 

  //Movies registration 
  // const title=req.body.title;
  // const description =req.body.description;
  // const type = req.body.type;
  // const duration =req.body.duration;
  // const releaseddate=req.body.releaseddate;


 
  //insert data into movies table 

  db.query(
    "INSERT INTO movies(title,description,type,duration,releaseddate) VALUES(?,?,?,?,?)",
    [title, description, type, duration,releaseddate],
    function (err, result) {
      if (err) throw err;
      res.send("movie is  added successfully");
    }
  );
});

app.post("/moviecreate", (req, res) => {
  const title = req.body.title;
  const director=req.body.director;
  const genre=req.body.genre;
  
  db.query(
    "INSERT INTO movies (title,director,genre) VALUES(?,?,?)",
    [title, director, genre],
    function (err, result) {
      if (err) throw err;
      res.send("movie is  added successfully");
    }
  );
});

app.get("/check_username/:username", (req, res) => {
  const username = req.params.username;

  db.query("SELECT COUNT(*) as count FROM userregistration WHERE username = ?", [username], function (err, result) {
    if (err) throw err;

    const exists = result[0].count > 0;
    res.send({ exists: exists });
  });
});

// end point for getting all list of user 
app.get("/userlist", (req, res) => {
  db.query("SELECT * FROM userregistration", function (err, result) {
    if (err) throw err;
    res.send(result);
  });

 
});
// end of it
 
// end point for delete user 
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM userregistration WHERE id=?", [id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting record");
    } else {
      res.send("User Data deleted");
    }
  });
});
//end of delete 
app.post("/movie-create", (req, res) => {
//Movies registration 
const title=req.body.title;
const description =req.body.description;
const type = req.body.type;
const duration =req.body.duration;
const releaseddate=req.body.releaseddate;

 db.query(
    "INSERT INTO userregistration(firstname,lastname,username,password) VALUES(?,?,?,?)",
    [firstname, lastname, username, password],
    function (err, result) {
      if (err) throw err;
      res.send("user added");
    }
  );
})
 //movie list 
 app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies", function (err, result) {
    if (err) throw err;
    res.send(result);
  });});

  app.get("/war", (req, res) => {
    db.query("SELECT * FROM movies where genre='war'", function (err, result) {
      if (err) throw err;
      res.send(result);
    });});


app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});

