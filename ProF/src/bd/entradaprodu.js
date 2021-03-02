const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/entradaprodu', (req, res) => {
        const cant_entrada = req.body.cant_entrada
        const fecha_entrada = req.body.fecha_entrada
        
        connect.query('insert into productos SET ?', {
            cant_entrada, fecha_entrada 
        }, (error, resultado) => {
            res.redirect('/stock')
        })
    })
}

