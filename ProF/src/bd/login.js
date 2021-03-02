const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/login', (req, res) => {
        const usuario_u= req.body.user
        const contra_u = req.body.pass

        if (usuario_u && contra_u) {
            connect.query('SELECT contra_u FROM usuarios WHERE usuario_u = ?', [usuario_u],
            (err, result, fields) => {
                if (bcrypt.compareSync(contra_u, result[0].contra_u)) {
                    //res.send('Ingreso correctamente.')
                    res.redirect('/inicio')
                } else {
                    res.redirect('/Login')
                }
                res.end()
            })
        }     
    })
}