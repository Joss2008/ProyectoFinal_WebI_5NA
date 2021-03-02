
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs') 
app.set('views', path.join(__dirname,'/vistas')) 

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '/vistas')))

module.exports = app
