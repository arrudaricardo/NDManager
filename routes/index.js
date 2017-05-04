var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  const storageFolder = path.resolve('/Volumes/Seagate Backup Plus Drive/Webtoon');
  fs.readdir(storageFolder, (err, files) => {
    if (err) {
      res.send(err);
    } else {
      res.send(files);
      // files.forEach(file => {
      //   console.log(file);
      //   res.send(file);
      // });
    }
  })
});


module.exports = router;
