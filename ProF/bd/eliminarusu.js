const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.get('/dele/:nombre_u', function (req, res){
        connect.query("delete from usuarios where nombre_u= ?", req.params.nombre_u, function(e,r) {
        });
        res.redirect("/usuario");
    })
}