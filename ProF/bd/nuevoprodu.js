const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/nuevoprodu', (req, res) => {
        const nombre_p = req.body.nombre_p
        const tipo_p = req.body.tipo_p
        const fechav_p = req.body.fechav_p
        const costo_p = req.body.costo_p
        const descripcion_p = req.body.descripcion_p
        const marca_p = req.body.marca_p
        const modelo_p = req.body.modelo_p
        const peso = req.body.peso_p
        const unimedida_p = req.body.unimedida_p
        const cantidad_p = req.body.cantidad_p

        var sql = 'insert into productos (nombre_p, tipo_p, fechav_p, costo_p, descripcion_p, marca_p, modelo_p, peso, unimedida_p, cantidad_p) VALUES (?, ?,?,?,?,?,?,?,?,?)'
        var valores = [nombre_p, tipo_p, fechav_p, costo_p, descripcion_p, marca_p, modelo_p, peso, unimedida_p, cantidad_p]

        connect.query(sql, valores, (error, resultado) => {
            res.redirect('/nuevoprodu')
        })
    })
}
