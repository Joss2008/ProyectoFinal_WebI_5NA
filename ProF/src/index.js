
const app = require('./configuracion')
const path = require('path')
require('./bd/registro')(app)
require('./bd/login')(app)
require('./bd/inicio')(app)
require('./bd/usuario')(app)
require('./bd/producto')(app)
require('./bd/proveedor')(app)
require('./bd/stock')(app)
require('./bd/informe')(app)
require('./bd/nuevoprodu')(app)
require('./bd/nuevoprove')(app)
require('./bd/nuevousu')(app)
require('./bd/entradaprodu')(app)
require('./bd/salidaprodu')(app)
require('./bd/editarusu')(app)
require('./bd/editarprodu')(app)
require('./bd/editarprove')(app)
// ruta del registro
const rutaDeRegistro = require('./rutas/rut-registro')
app.use(rutaDeRegistro)
// ruta del login
const rutaDeLogin = require('./rutas/rut-login')
app.use(rutaDeLogin)
// ruta del inicio
const rutaDeInicio = require('./rutas/rut-inicio')
app.use(rutaDeInicio)
// ruta del usuario
const rutaDeUsuario = require('./rutas/rut-usuario')
app.use(rutaDeUsuario)
// ruta del producto
const rutaDeProducto = require('./rutas/rut-producto')
app.use(rutaDeProducto)
// ruta del proveedor
const rutaDeProveedor = require('./rutas/rut-proveedor')
app.use(rutaDeProveedor)
// ruta del stock
const rutaDeStock = require('./rutas/rut-stock')
app.use(rutaDeStock)
// ruta del informe
const rutaDeInforme = require('./rutas/rut-informe')
app.use(rutaDeInforme)
// ruta del nuevo producto
const rutaDeNuevoProdu = require('./rutas/rut-nuevoprodu')
app.use(rutaDeNuevoProdu)
// ruta del nuevo proveedor
const rutaDeNuevoProve = require('./rutas/rut-nuevoprove')
app.use(rutaDeNuevoProve)
// ruta del nuevo Usuario
const rutaDeNuevoUsu = require('./rutas/rut-nuevousu')
app.use(rutaDeNuevoUsu)
// ruta de la entrada de producto
const rutaDeLaEntradaProducto = require('./rutas/rut-entradaprodu')
app.use(rutaDeLaEntradaProducto)
// ruta de la salida de producto
const rutaDeLaSalidaProducto = require('./rutas/rut-salidaprodu')
app.use(rutaDeLaSalidaProducto)
// ruta de editar usuarios
const rutaDeEditarUsuario = require('./rutas/rut-editarusu')
app.use(rutaDeEditarUsuario)
// ruta de editar producto
const rutaDeEditarProducto = require('./rutas/rut-editarprodu')
app.use(rutaDeEditarProducto)
// ruta de editar proveedores
const rutaDeEditarProveedor = require('./rutas/rut-editarprove')
app.use(rutaDeEditarProveedor)
// ruta de localhost
app.listen(4000, () => {
    console.log('Servidor ejecutandose correctamente...')
})

