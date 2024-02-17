const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.102.44',
  user: 'sqluser',
  password: 'password'
});