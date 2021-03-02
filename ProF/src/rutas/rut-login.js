const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-login')

router.get('/login', controlador.login)

module.exports = router
