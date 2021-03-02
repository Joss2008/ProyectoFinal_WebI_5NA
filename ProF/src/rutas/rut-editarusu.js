const express = require('express')
const router = express.Router()
const controlador = require('../controladores/con-editarusu')

router.get('/editarusu', controlador.editarusu)

module.exports = router
