const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.102.44',
  user: 'sqluser',
  password: 'password'
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established successfully');
})
connection.end((error) => {});