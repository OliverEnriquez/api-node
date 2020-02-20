var express = require('express');
var http = require('http');
var app = express();
var mysql = require('mysql');
const  bodyParser = require('body-parser');

const port = 3000

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'apioliver'
});

connection.connect(function(err) {
    if (err) throw err;
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM USERS", function (err, result, fields) {
        if (err) throw err
        res.json(result);
    })
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))


