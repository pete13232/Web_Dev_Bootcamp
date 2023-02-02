var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel'
});

connection.connect();

app.get('/attractions', function (req, res, next) {
    connection.query('SELECT * FROM attractions', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });

})

app.listen(3333, function () {
    console.log('CORS-enabled web server listening on port 3333')
})