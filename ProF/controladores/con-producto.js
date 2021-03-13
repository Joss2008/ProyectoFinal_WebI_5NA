const connection = require('../bd/coneccion')
const conn = connection

const controladorProducto = {}

controladorProducto.producto = (req, res, next) => {
    conn.query('SELECT * FROM productos', (err, rows) => {
        res.render('producto.ejs', {allProducts: rows})
    })
}

module.exports = controladorProducto


