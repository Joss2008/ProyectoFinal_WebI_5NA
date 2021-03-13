const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-inicio')

router.get('/inicio', controlador.inicio)

module.exports = router


