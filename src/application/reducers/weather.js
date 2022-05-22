import { LOAD_WEATHER_FORECAST_FAILURE, LOAD_WEATHER_FORECAST_SUCCESS } from "../actions/weather";

const initialState = {
    weatherInfo: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WEATHER_FORECAST_SUCCESS:
            return { weatherInfo: action.payload, error: null };
        case LOAD_WEATHER_FORECAST_FAILURE:
            return { weatherInfo: null, error: action.payload };
        default:
            return state;
    }
}

export default reducer;