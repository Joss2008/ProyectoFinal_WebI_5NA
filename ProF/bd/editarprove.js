const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.post('/editarprove', (req, res) => {
        const nombre_prove = req.body.nombre_prove
        const ruta_prove = req.body.ruta_prove
        const tel_prove = req.body.tel_prove
         
        console.log(nombre_prove, ruta_prove, tel_prove  )
        connect.query("update proveedor set ? where nombre_prove = ?",[{
            nombre_prove, ruta_prove, tel_prove 
        }, nombre_prove] , (err, rows) => {
            res.redirect('/proveedor')
        })
    })
}

