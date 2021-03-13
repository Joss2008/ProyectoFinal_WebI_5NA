const connection = require('../bd/coneccion')
const conn = connection

const controladorProveedor = {}

controladorProveedor.proveedor = (req, res, next) => {
    conn.query('SELECT * FROM proveedor', (err, rows) => {
        res.render('proveedor.ejs', {allProveedor: rows})
    })
}

module.exports = controladorProveedor
