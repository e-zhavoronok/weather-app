const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

location = process.argv[2];

if (location) {
    geocode(location, (error, { latitude, longtitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    })
}