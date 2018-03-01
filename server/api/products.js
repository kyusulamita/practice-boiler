const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
  res.send('Dennis is a meanie');
});


module.exports = router;
