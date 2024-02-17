var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host: '192.168.102.44',
  user: 'sqluser',
  password: 'password',
  database        : 'pets'
});

pool.query('SELECT * FROM `pets`.`cats` LIMIT 1000;', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'server running'
  });
})

app.listen(1337, () => {
  console.log('server is running!')
})