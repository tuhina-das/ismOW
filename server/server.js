const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "foft"
})

//api to get event data
app.get("/", (req, res) => {
    const sql = "SELECT * FROM Events";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//api to add data (add button in todo)
app.post("/create", (req, res) => {
    // console.log("Entered post       ");
    const sql = "INSERT INTO Events (title, day_of_week, uid) VALUES (?)";
    // console.log("WORKS      "  + req);
    const values = [
        req.body.todo,
        req.body.day,
        req.body.uid
    ];
    console.log(values);
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log("xxxxx " + err);
            return res.json(err);

        }
        console.log("Data is      " + data);
        return res.json(data);
    })

    const day = req.body.day;
    var dayWord = '';
    if (day==1){
        dayWord='sundays';
    }
    else if (day==2){
        dayWord='mondays';
    }
    else if (day==3){
        dayWord='tuesdays';
    }
    else if (day==4){
        dayWord='wednesdays';
    }
    else if (day==5){
        dayWord='thursdays';
    }
    else if (day==6){
        dayWord='fridays';
    }
    else if (day==7){
        dayWord='saturdays';
    }
    console.log("Dayword is " + dayWord); /****UNDEFINED*******/
    const sql2 = "UPDATE Users SET " + dayWord + " = " + dayWord + " + 1";
    db.query(sql2, (err, data) => {
        if (err){
            console.log("yyyyyy " + err);
            return res.json(err);
        }
        return res.json(data);
    })
})

//api to delete data (delete button)
app.delete('/todo/:id', (req, res) => {
    console.log("req is " + req)
    const sql = "DELETE FROM Events WHERE ID = ?";
    const id = req.params.id;
    console.log("ID IS" + id)

    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//api to retrieve user data (for graph, login/profile page)
app.get("/userdat", (req, res) => {
    const sql = "SELECT * FROM Users WHERE ID = 1";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//listen to make sure this is running
app.listen(8081, () => {
    console.log("Listening!");
})