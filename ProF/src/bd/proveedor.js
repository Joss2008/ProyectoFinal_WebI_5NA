
const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion
    app.post('/proveedor', (req, res) => {

        connect.query('select * from proveedor SET ?' (
        function(error,results){
            if (error) {            
                console.log('error en el listado');
                return;
            }   else{
                res.render('/proveedor', {results:results});
            } 
    })
    )})
}