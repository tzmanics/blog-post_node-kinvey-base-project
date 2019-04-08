// app.js

const Kinvey = require('kinvey-node-sdk');

Kinvey.init({
  appKey: 'kid_S16j3xVFN',
  appSecret: 'e0a009c5a6f84949a8310e8c24ff2b7f'
});

// optional code to test for successful connection
Kinvey.ping().then((response) => {
  console.log(`Kinvey Ping Success! Response: ${response.kinvey}`);
  }).catch((error) => {
    console.log(`Kinvey Ping Failed. Resonse: ${error.description}`);
  });

