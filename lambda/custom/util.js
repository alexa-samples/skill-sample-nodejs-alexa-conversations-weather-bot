const Alexa = require('ask-sdk-core');

/**
 * Helper method to find if a request is for a certain apiName.
 */
const isApiRequest = (handlerInput, apiName) => {
    try {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === apiName;
    } catch (e) {
        console.log('Error occurred: ', e);
        return false;
    }
}

/**
 * Helper method to get API arguments from the request envelope.
 */
const getApiArguments = (handlerInput) => {
    try {
        return handlerInput.requestEnvelope.request.apiRequest.arguments;
    } catch (e) {
        console.log('Error occurred: ', e);
        return false;
    }
}

/**
 * Helper method to get API slots from the request envelope.
 */
const getSlots = (handlerInput) => {
    try {
        return handlerInput.requestEnvelope.request.apiRequest.slots;
    } catch (e) {
        console.log('Error occurred: ', e);
        return false;
    }
}

const getCityNameWithIdFromApiRequestSlots = (handlerInput) => {
    // Since cityName is a list based catalog type, we will get it from the slots object.
    const slots = getSlots(handlerInput);

    const resolvedCityName = slots.cityName;
    if (resolvedCityName &&
        resolvedCityName.resolutions &&
        resolvedCityName.resolutions.resolutionsPerAuthority &&
        resolvedCityName.resolutions.resolutionsPerAuthority[0] &&
        resolvedCityName.resolutions.resolutionsPerAuthority[0].status &&
        resolvedCityName.resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH') {
        return resolvedCityName.resolutions.resolutionsPerAuthority[0].values[0].value;
    }
    return null;
}


module.exports = {
    isApiRequest: isApiRequest,
    getApiArguments: getApiArguments,
    getSlots: getSlots,
    getCityNameWithIdFromApiRequestSlots: getCityNameWithIdFromApiRequestSlots
};