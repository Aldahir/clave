const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"eticket"
})

con.connect((err, next)=>{
    if (err) throw err;
    console.log("Conectado com sucesso");
})

module.exports = con;