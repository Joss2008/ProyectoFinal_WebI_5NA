const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-informe')

router.get('/informe', controlador.informe)

module.exports = router
