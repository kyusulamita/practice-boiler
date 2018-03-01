const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api')

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '..', '/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

app.use('*', (req, res, next) => {
	console.log('No such route exists')
})

app.listen()