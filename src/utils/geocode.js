const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWVyZXdhbHJ1cyIsImEiOiJja3o4aG9tMmYxOWNyMnVwa2dtN3MyamNnIn0.xO5SWlUTebnOnAbnd85g9w&limit=1`;
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find the location", undefined);
        } else {   
            const { 0:longtitude, 1:latitude } = response.body.features[0].center;
            
            callback(undefined, {
                longtitude,
                latitude,
                location: response.body.features[0].place_name
            });
        }    
    });
}

module.exports = geocode;