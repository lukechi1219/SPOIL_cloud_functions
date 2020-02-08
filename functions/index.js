const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(async (request, response) => {

  const fetch = require('node-fetch')

  var url = 'http://data.nhi.gov.tw/Datasets/Download.ashx?'
	+ 'rid=A21030000I-D50001-001'
	+ '&l=https://data.nhi.gov.tw/resource/mask/maskdata.csv';

  const fileResponse = await fetch(url);
  const fileText = await fileResponse.text();

  response.send('Hello from Firebase = ' + fileText.split('\r\n').length);
});
