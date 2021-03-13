
const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion

    app.get('/delete/:nombre_p', function (req, res){
        connect.query("delete from productos where nombre_p= ?", req.params.nombre_p, function(e,r) {
        });
        res.redirect("/producto");
    })
}