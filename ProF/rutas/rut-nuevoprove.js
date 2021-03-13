const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-nuevoprove')

router.get('/nuevoprove', controlador.nuevoprove)

module.exports = router
