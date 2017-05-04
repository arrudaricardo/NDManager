var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.ok("now preparing setup from 2017/05/04");
});

module.exports = router;
