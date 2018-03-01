const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const port = process.env.PORT || 3030;


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

app.use((err, req, res, next) => {
  console.log(err);
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || '500 internal server');
})

app.listen(port, () => {
  console.log(`Listening on port ${3030}`)
});
