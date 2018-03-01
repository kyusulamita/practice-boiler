const express = require('express');
const router = express.Router();


// require in model api routes
router.use('/products', require('./products'));

// if requested route is not one that is defined
router.use( (req, res, next) => {
  const error = new Error('Api route not found');
  error.status = 404;
  next(error);
});

module.exports = router;
