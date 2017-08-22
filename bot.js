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
    'a4.png',
    'a5.png',
    'a6.png',
    'a7.png',
    'a8.png',
    'a9.png',
    'a10.png',
    'a11.png',
    'a12.png',
    'a13.png',
    'a14.png',
    'a15.png',
    'a16.png',
    'a17.png',
    'a18.png',
    'a19.png',
    'a20.png',
    'a21.png',
    'a22.png',
    'a23.png',
    'a24.png',
    'a25.png',
    'a26.png',
    'a27.png',
    'a28.png',
    'a29.png',
    'a30.png',
    'a31.png',
    'a32.png',
    'a33.png',
    'a34.png',
    'a35.png',
    'a36.png',
    'a37.png',
    'a38.png',
    'a39.png',
    'a40.png',
    'a41.png'

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





       // Now we can reference the media and post a tweet
      // with the media attached
      var mediaIdStr = data.media_id_string;
      var params = { status: '#findom #paypig #cashcow #finsub #femdom #inhumanmistress #moneyfetish #footfetish #footgoddess #3dfindom #queenofcups #humanatm #3Dfindom', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, {
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

//setInterval(
  //upload_random_image,
  //10000
//);
upload_random_image();
setInterval(upload_random_image, 1000*60*15)