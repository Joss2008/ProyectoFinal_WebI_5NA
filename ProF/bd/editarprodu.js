const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.post('/editarprodu', (req, res) => {
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
        console.log(nombre_p, tipo_p, fechav_p, costo_p, descripcion_p,
            marca_p, modelo_p, peso, unimedida_p, cantidad_p
            )
        connect.query("update productos set ? where nombre_p = ?",[{
            nombre_p, tipo_p, fechav_p, costo_p, descripcion_p, marca_p, 
            modelo_p, peso, unimedida_p, cantidad_p
        }, nombre_p] , (err, rows) => {
            res.redirect('/producto')
        })
    })
}
