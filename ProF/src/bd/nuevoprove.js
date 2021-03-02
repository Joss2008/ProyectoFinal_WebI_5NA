const conexion = require('./coneccion')  


module.exports = app => {
    const connect = conexion

    app.post('/nuevoprove', (req, res) => { 
        const nombre_prove = req.body.nombre_prove
        const ruta_prove = req.body.ruta_prove
        const tel_prove = req.body.tel_prove
 

        connect.query('insert into proveedor SET ?', {
            nombre_prove, ruta_prove, tel_prove
        }, (error, resultado) => {
            res.redirect('/nuevoprove')
        })
    })
}
