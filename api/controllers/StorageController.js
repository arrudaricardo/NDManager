/**
 * Created by JongInKoo on 2017. 5. 4..
 */

const Promise = require('bluebird');
const fs = require('fs');
Promise.promisifyAll(fs);

module.exports = {
  getFolders: getFolders
};
function getFolders(req, res) {

  const storageFolder = path.resolve('/Volumes/Seagate Backup Plus Drive/Webtoon');
  fs.readdir(storageFolder)
  .then(data=> {
    res.send(data);
  })
  .catch(err=> {
    res.send(500, err);
  })
}