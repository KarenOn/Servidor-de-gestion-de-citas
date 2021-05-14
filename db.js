const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Trabajo',
    dialect: 'mysql',
    port: '3308'
});

connection.connect(error => {
    if(error) throw error;
    console.log('Base de datos conectada');
});

module.exports = connection;