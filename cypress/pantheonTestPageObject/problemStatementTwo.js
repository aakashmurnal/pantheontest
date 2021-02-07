/*
    Export Dark Sky API Page Data
*/
const darkSkyApiPage = {
    /*
        Dark Sky API Page constants
            Secret Key: ​6508dfe23c140cf146a5ad4c2b233282
            https://api.darksky.net/forecast/{api_key}/latitude,longitude
            Bangalore latitude and longitude - 12.9716° N, 77.5946° E
    */
    apiUrl: 'https://api.darksky.net/forecast/6508dfe23c140cf146a5ad4c2b233282/12.9716,77.5946',
    // Dark Sky API Page method
    get: 'get',
    accept: 'accept',
    json: 'application/json',
    // Dark Sky API Page Status
    success: 200,
    // Dark Sky API Page Data
    latitude: 'latitude',
    longitude: 'longitude',
    timezone: 'timezone',
    currently: 'currently',
    hourly: 'hourly',
    daily: 'daily',
    flags: 'flags',
    offset: 'offset',
    // Dark Sky API Page Fields
    isString: 'string',
    isObject: 'object',
    isNumber: 'val is number',
    hourlyDataLength: 49,
    dailyDataLength: 8,
    // Dark Sky API Values
    latitudeValue: 12.9716,
    longitudeValue: 77.5946,
    timezoneValue: 'Asia/Kolkata',
}

export { darkSkyApiPage };