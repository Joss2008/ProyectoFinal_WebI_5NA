const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-producto')

router.get('/producto', controlador.producto)

module.exports = router


