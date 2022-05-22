import axios from 'axios';

const OW_URL = 'https://api.openweathermap.org/data/2.5/weather';
const OW_API_KEY = process.env.REACT_APP_OW_API_KEY;

export default {
    getWeatherForecast: async () => {
        const lat = -9.376960;
        const lng = -37.241829;

        const response = await axios.get(`${OW_URL}?lat=${lat}&lon=${lng}&appid=${OW_API_KEY}`);
        return response.data;
    }
}