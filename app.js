const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=2a869bc9aa64d46e2ae976b47168654a&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});