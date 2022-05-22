export const LOAD_WEATHER_FORECAST = '[weather] load';
export const LOAD_WEATHER_FORECAST_SUCCESS = '[weather] load success';
export const LOAD_WEATHER_FORECAST_FAILURE = '[weather] load failure';

export const loadWeatherForecast = {
    type: LOAD_WEATHER_FORECAST,
};

export const loadWeatherForecastSuccess = weatherForecastInfo => ({
    type: LOAD_WEATHER_FORECAST_SUCCESS,
    payload: weatherForecastInfo,
});

export const loadWeatherForecastFailure = error => ({
    type: LOAD_WEATHER_FORECAST_FAILURE,
    payload: error,
});
