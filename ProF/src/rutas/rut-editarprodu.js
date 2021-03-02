const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-editarprodu')

router.get('/editarprodu', controlador.editarprodu)

module.exports = router
