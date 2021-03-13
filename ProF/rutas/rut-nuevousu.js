const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-nuevousu')

router.get('/nuevousu', controlador.nuevousu)

module.exports = router
