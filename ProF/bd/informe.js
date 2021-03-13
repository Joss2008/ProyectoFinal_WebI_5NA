const conexion = require('./coneccion')
const bcrypt = require('bcrypt')

module.exports = app => {
    const connect = conexion

    app.post('/informe', (req, res) => {
        connect.query('select * from producto SET ?' (
            function(error,results){
                if (error) {            
                    console.log('error en el listado');
                    return;
                }   else{
                    res.render('/informe', {results:results});
                    } 
            }))
        })
}
