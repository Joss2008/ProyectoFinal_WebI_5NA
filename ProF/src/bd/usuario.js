const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion
    app.post('/usuario', (req, res) => {

        connect.query('select * from usuarios SET ?' (
        function(error,results){
            if (error) {            
                console.log('error en el listado');
                return;
            }   else{
                res.render('/usuario', {results:results});
            } 
    })
    )})
}