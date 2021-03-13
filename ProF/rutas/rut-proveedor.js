const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-proveedor')

router.get('/proveedor', controlador.proveedor)

module.exports = router
