'use strict';

const s3 = require('s3');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.S3_REGION
  },
});
const uploader = client.uploadDir({
  localDir: __dirname + '/out',
  deleteRemoved: true,
  s3Params: {
    Bucket: process.env.S3_BUCKET,
    Prefix: ''
  }
});
uploader.on('error', function(err) {
  console.error('unable to sync:', err.stack);
});
uploader.on('end', function() {
  console.log("done uploading website");
});