const conexion = require('./coneccion')

module.exports = app => {
    const connect = conexion
    app.post('/producto', (req, res) => {

        connect.query('select * from producto SET ?' (
        function(error,results){
            if (error) {            
                console.log('error en el listado');
                return;
            }   else{
                res.render('/producto', {results:results});
            } 
    })
    )})
}

