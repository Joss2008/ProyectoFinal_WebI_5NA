const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-usuario')

router.get('/usuario', controlador.usuario)

module.exports = router
