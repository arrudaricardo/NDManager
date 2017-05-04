var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(StorageController.getFolders(req, res));
});


module.exports = router;
