let mysql = require('mysql');

let connMySQL = function(){
    
    return connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'advanced_node'
    });
}

module.exports = function(){
    return connMySQL;
}