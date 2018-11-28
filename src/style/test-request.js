const request = require('request');
/*request
    .get('https://next.json-generator.com/api/json/get/VJJdmtECH')
    .on('response', function(response) {
        console.log('statusCode', response.statusCode) // 200
        console.log('content-type', response.headers['content-type']) // 'image/png'
        console.log('response body: ', response.body);
    })
    .on('data', function(data) {
        // decompressed data as it is received
        console.log('decoded chunk: ' + data)
    })*/

request.get(
  'https://next.json-generator.com/api/json/get/VJJdmtECH',
  (error, response, body) => {
    console.log('dark:', JSON.parse(body).theme); // Print the HTML for the Google homepage.
  }
);

request.get(
  'https://next.json-generator.com/api/json/get/4kJ9EIlCr',
  (error, response, body) => {
    console.log('light:', JSON.parse(body).theme); // Print the HTML for the Google homepage.
  }
);
