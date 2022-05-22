import { LOAD_WEATHER_FORECAST, loadWeatherForecastSuccess, loadWeatherForecastFailure } from "../actions/weather";
import * as uiActions from '../actions/ui';

const loadWeatherForecastFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_WEATHER_FORECAST) {
        try {
            dispatch(uiActions.setLoading(true));
            const weatherInfo = await api.weather.getWeatherForecast();
            dispatch(loadWeatherForecastSuccess(weatherInfo));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            dispatch(loadWeatherForecastFailure(error));
            dispatch(uiActions.setLoading(false));
        }
    }
}

export default [
    loadWeatherForecastFlow,
]