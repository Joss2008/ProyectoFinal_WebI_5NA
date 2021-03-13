const connection = require('../bd/coneccion')
const conn = connection

const controladorUsuario = {}

controladorUsuario.usuario = (req, res, next) => {
    conn.query('SELECT * FROM usuarios', (err, rows) => {
        res.render('usuario.ejs', {allUsuario: rows})
    })
}

module.exports = controladorUsuario
