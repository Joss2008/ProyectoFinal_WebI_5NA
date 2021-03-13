const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-stock')

router.get('/stock', controlador.stock)

module.exports = router