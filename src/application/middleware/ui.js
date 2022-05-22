import { PAGE_LOADED } from "../actions/ui";
import * as weatherActions from '../actions/weather';

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
        dispatch(weatherActions.loadWeatherForecast);
    }
}

export default [
    pageLoadedFlow
]