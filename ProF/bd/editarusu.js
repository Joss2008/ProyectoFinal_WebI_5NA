const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/editarusu', (req, res) => {
        const tipo_u = req.body.tipo_u
        const nombre_u = req.body.nombre_u
        const usuario_u = req.body.usuario_u
        const correo_u = req.body.correo_u
        
        console.log(tipo_u, nombre_u, usuario_u, correo_u  )
        connect.query("update usuarios set ? where nombre_u = ?",[{
            tipo_u, nombre_u, usuario_u, correo_u 
        },  nombre_u] , (err, rows) => {
            res.redirect('/usuario')
        })
        
    })
}
