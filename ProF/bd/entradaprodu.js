const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.post('/entradaprodu', (req, res) => {
        const producto_e = req.body.id_producto
        const cantidad_e = req.body.cant_entrada
        const fecha_e = req.body.fecha_entrada
        
        var sql = 'insert into entradas (producto_e, cantidad_e, fecha_e) VALUES (?, ?, ?)'
        var valores = [producto_e, cantidad_e, fecha_e]

        connect.query(sql, valores, (error, resultado) => {
            res.redirect('/entradaprodu')
        })
    })
}

