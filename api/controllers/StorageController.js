/**
 * Created by JongInKoo on 2017. 5. 4..
 */

const Promise = require('bluebird');

module.exports = {
  getFolders: getFolders
};

function getFolders(req, res) {

  const storageFolder = path.resolve('/Volumes/Seagate Backup Plus Drive/Webtoon');


  new Promise((resolve, reject)=> {
    fs.readdir(storageFolder, (err, files) => {
      if (err) {
        console.log(2);
        reject(err);
      } else {
        console.log(3);
        resolve(files);
      }
    })
  })
  .then(data=> {
    console.log(4);
    res.send(data);
  })
  .catch(err=> {
    console.log(err);
    res.send(500, err);
  })

}