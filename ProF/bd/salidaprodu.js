const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/salidaprodu', (req, res) => {
        const producto_s = req.body.id_producto
        const cantidad_s = req.body.cant_salida
        const fecha_s = req.body.fecha_salida
        
        var sql = 'insert into salidas (producto_s, cantidad_s, fecha_s) VALUES (?, ?, ?)'
        var valores = [producto_s, cantidad_s, fecha_s]

        connect.query(sql, valores, (error, resultado) => {
            res.redirect('/salidaprodu')
        })
    })
}
