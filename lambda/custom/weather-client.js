const WEATHER_DATA = require('./weather-data.json');

/**
 * You can update this method with an actual Weather API call. This will just look up a data object from a small
 * list in a file.
 *
 * @param cityId the city name value's slot id, parsed from the resolved slot
 * @param date the date
 * @returns {Object} an object with highTemperature and lowTemperature fields, or an empty object
 */
const getWeather = (cityId) => {
    if (cityId && WEATHER_DATA[cityId]) {
        return WEATHER_DATA[cityId];
    }
    return {};
};

module.exports = {
    getWeather
};