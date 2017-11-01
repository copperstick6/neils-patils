export function makeRequestMeme(memeName, memeDescript){
	var request = require("request");

var options = { method: 'GET',
  url: 'http://e5ff8bb8.ngrok.io/sendNewMeme',
  qs: { name: memeName, description: memeDescript },
  headers:
   { 'postman-token': '1f0b4d53-8f4b-7101-02d1-3a10ebb4cab2',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  console.log(body);
  return body;
});
}

export function makeRequestName(memeName){
	var request = require("request");

var options = { method: 'GET',
  url: 'http://e5ff8bb8.ngrok.io/getMemeNameGood',
  qs: { name: memeName},
  headers:
   { 'postman-token': '1f0b4d53-8f4b-7101-02d1-3a10ebb4cab2',
	 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  console.log(body);
  return body;
});
}
