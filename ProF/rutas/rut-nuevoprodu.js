const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-nuevoprodu')

router.get('/nuevoprodu', controlador.nuevoprodu)

module.exports = router
