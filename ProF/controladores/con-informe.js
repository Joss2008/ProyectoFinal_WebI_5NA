const connection = require('../bd/coneccion')
const conn = connection

const controladorInforme = {}

controladorInforme.informe= (req, res, next) => {
    var entradas = 'SELECT id, nombre_p, tipo_p, costo_p, cantidad_p, cantidad_e, fecha_e FROM productos INNER JOIN entradas ON productos.id = entradas.producto_e'
    var salidas = 'SELECT id, nombre_p, tipo_p, costo_p, cantidad_p, cantidad_s, fecha_s FROM productos INNER JOIN salidas ON productos.id = salidas.producto_s'
    conn.query(entradas+';'+salidas, (err, rows) => {
        res.render('informe.ejs', {
            allIngresos: rows[0],
            allSalidas: rows[1]
        })
    })

}

module.exports = controladorInforme

