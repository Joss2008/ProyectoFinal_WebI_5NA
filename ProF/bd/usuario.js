const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/usuario', (req, res) => {
        const tipousuario = req.body.tipo_u
        const nombres = req.body.nombre_u
        const usuario = req.body.usuario_u
        const correo = req.body.correo_u
        const contrasena = bcrypt.hashSync(req.body.contra_u, 5)

        connect.query('insert into usuario SET ?', {
            tipousuario, nombres, usuario, correo, contrasena
        }, (error, resultado) => {
            res.redirect('/login')
        })
    })

}

