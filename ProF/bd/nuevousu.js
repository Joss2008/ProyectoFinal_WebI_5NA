const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/nuevousu', (req, res) => {
        const tipo_u = req.body.tipo_u
        const nombre_u = req.body.nombre_u
        const usuario_u = req.body.usuario_u
        const correo_u = req.body.correo_u
        const contra_u = bcrypt.hashSync(req.body.contra_u, 5)
        console.log(tipo_u, nombre_u, usuario_u, correo_u, contra_u )
        connect.query('insert into usuarios SET ?', {
            tipo_u,nombre_u, usuario_u, correo_u, contra_u
        }, (error, resultado) => {
            res.redirect('/nuevousu')
       })
    })
}
