const connection = require('../bd/coneccion')
const conn = connection
const controladorEditarProducto = {}

controladorEditarProducto.editarprodu= (req, res, next) => {
    res.render('editarprodu')
}

module.exports = controladorEditarProducto

