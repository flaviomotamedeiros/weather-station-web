import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getWeatherInfo } from '../application/selectors/weather';
import { pageLoaded } from '../application/actions/ui';
import { getLoading } from '../application/selectors/ui';

const WebPage = () => {

    const dispatch = useDispatch();
    const weatherInfo = useSelector(getWeatherInfo);
    const error = useSelector(getError);
    const loading = useSelector(getLoading);

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    
    return (
        <>
            <h1>Weather Forecast</h1>
            {loading ? 'Loading weather info...' : error ? 'Something went wrong! Try again later: ' + JSON.stringify(error) : (
                <ul>
                    <li>{'Sky: ' + weatherInfo.weather[0].description}</li>
                    <li>{'Temperature: ' + weatherInfo.main.temp + ' °F'}</li>
                    <li>{'Wind speed: ' + weatherInfo.wind.speed + ' m/s'}</li>
                    <li>{'Wind direction: ' + weatherInfo.wind.deg + '°'}</li>
                </ul>
            )}
        </>
    )
}

export default WebPage;