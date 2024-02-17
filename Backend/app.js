const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.102.44',
  user: 'sqluser',
  password: 'password'
});
const sql = 'SELECT * FROM `pets`.`cats` LIMIT 1000;'

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established successfully');
  connection.query(sql, function (err, result){
    if (err) throw err;
    console.log("Result: " + result);
  });
})


connection.end((error) => {});