const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-salidaprodu')

router.get('/salidaprodu', controlador.salidaprodu)

module.exports = router

