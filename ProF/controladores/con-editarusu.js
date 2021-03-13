const connection = require('../bd/coneccion')
const conn = connection

const controladorEditarUsuario = {}

controladorEditarUsuario.editarusu= (req, res) => {
    res.render('editarusu')
}

module.exports = controladorEditarUsuario

