const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-entradaprodu')

router.get('/entradaprodu', controlador.entradaprodu)

module.exports = router
