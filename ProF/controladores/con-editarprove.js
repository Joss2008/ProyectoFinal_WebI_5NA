const connection = require('../bd/coneccion')
const conn = connection

const controladorEditarProveedor = {}

controladorEditarProveedor.editarprove= (req, res) => {
    res.render('editarprove')
}

module.exports = controladorEditarProveedor

