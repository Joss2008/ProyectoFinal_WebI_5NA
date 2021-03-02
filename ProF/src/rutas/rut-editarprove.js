const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-editarprove')

router.get('/editarprove', controlador.editarprove)

module.exports = router
