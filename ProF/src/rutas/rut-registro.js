const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-registro')

router.get('/registro', controlador.registro)

module.exports = router

