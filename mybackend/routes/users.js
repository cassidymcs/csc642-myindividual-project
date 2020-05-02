var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pepper12',
  database: 'mydatabase',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connection successful!, id: ' + connection.threadId);
});

const SELECT_ALL_BOOKS = 'SELECT* FROM books';

router.get('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query(SELECT_ALL_BOOKS, (err, results) => {
    if(err){
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  });

  connection.query("SELECT * FROM user", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

});

module.exports = router;
