const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.get('/delec/:nombre_prove', function (req, res){
        connect.query("delete from proveedor where nombre_prove= ?", req.params.nombre_prove, function(e,r) {
        });
        res.redirect("/proveedor");
    })
}