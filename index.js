const argv = require('yargs').argv;

const request = require('request');

let apiKey = '8810b6480d0ac4bb9736448a52e43caa';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      let weather = JSON.parse(body);
      let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
    console.log(message);
  }
});