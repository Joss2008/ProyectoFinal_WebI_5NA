const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'inventario3',
    multipleStatements: true
})
connection.connect(function(error){
    if(error) {
        console.log("Error al conectar con la bd...")
    } else {
        console.log("Conexión correcta a la bd...")
    }
})

module.exports = connection



