const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/salidaprodu', (req, res) => {
        const cant_salida = req.body.cant_salida
        const fecha_salida = req.body.fecha_salida
        
        connect.query('insert into productos SET ?', {
            cant_salida, fecha_salida 
        }, (error, resultado) => {
            res.redirect('/stock')
        })
    })
}
