var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

function pick_random_queenofcups(){
  var queenofcups = [
    'a.png',
    'a1.png',
    'a2.png',
    'a3.png',
    'a4.png'
  ];
  return queenofcups[Math.floor(Math.random() * queenofcups.length)];
}

function upload_random_image(){
  console.log('Opening an image...');
  var image_path = path.join(__dirname, './queenofcups/' + pick_random_queenofcups()),
      b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading an image...');

  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    if (err){
      console.log('ERROR');
      console.log(err);
    }
    else{
      console.log('Uploaded an image!');

      T.post('statuses/update', {
        media_ids: new Array(data.media_id_string)
      },
        function(err, data, response) {
          if (err){
            console.log('Error!');
            console.log(err);
          }
          else{
            console.log('Posted an image!');
          }
        }
      );
    }
  });
}

setInterval(
  upload_random_image,
  10000
);