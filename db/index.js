const env = require('./env');
const mysql = require('mysql');

const connection = mysql.createConnection({
    //properties
    host: env.DB.HOST,
    user: env.DB.USER,
    password: env.DB.PASSWORD,
    database: env.DB.DATABASE
});



connection.connect(function(error){
    if(error){
        console.log('Error in Connecting database');
        console.log('Error ==> ',error);
    }else{
        console.log('Database Connected !');
    }
});
 
/* connection.end(); */

module.exports = connection;