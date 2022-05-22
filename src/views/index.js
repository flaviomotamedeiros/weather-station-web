import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getWeatherInfo } from '../application/selectors/weather';
import { pageLoaded } from '../application/actions/ui';
import { getLoading } from '../application/selectors/ui';

export default () => {

    const dispatch = useDispatch();
    const weatherInfo = useSelector(getWeatherInfo);
    const error = useSelector(getError);
    const loading = useSelector(getLoading);

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    return (
        <>
            <h1>Essential Todos</h1>
            {loading ? 'Loading weather info...' : error ? 'Something went wrong! Try again later: ' + JSON.stringify(error) : (
                <p>{weatherInfo.weather[0].description}</p>
            )}
        </>
    )
}