var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {

  res.status(200).sendFile(path.resolve(__dirname, '../public/views/index.html'));

});

router.get('/storage/getFolders', (req, res, next)=> {
  const storageFolder = path.resolve('/Volumes/Seagate Backup Plus Drive/Webtoon');

  new Promise((resolve, reject)=> {
    fs.readdir(storageFolder, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    })
  })
  .then(data=> {
    res.send(data);
  })
  .catch(err=> {
    res.status(500).send(err);
  })
});


module.exports = router;
