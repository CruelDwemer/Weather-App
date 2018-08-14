import { select, put, takeEvery } from 'redux-saga/effects';

import { REFRESH_WEATHER, GET_WEATHER_FORECAST } from '../constants';
import { setWeather, setWeatherForecast } from '../actions';
import { apiKey } from '../../service/settings';

function* getWeatherInfo(action) {
    const { id, name } = action;
    try {
        const response = yield fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${apiKey}`);
        if (!response.ok) {
            throw new Error ('error');
        }
        const textResponse = yield response.text();
        const body = yield JSON.parse(textResponse);
        const params = {
            temp: body.main.temp,
            wind: body.wind.speed,
            sky: body.weather[0].description
        }
        yield put(setWeather(id, params));
    } catch (error) {console.log(error)}
}

function* getWeatherForecast(action) {
    const { name } = action;
    try {
        const response = yield fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${apiKey}`);
        if (!response.ok) {
            throw new Error ('error');
        }
        const textResponse = yield response.text();
        const body = yield JSON.parse(textResponse);
        const params = [...body.list];
        yield put(setWeatherForecast(params));
    } catch (error) { console.log(error)}
}

export default function* inject () {
    yield takeEvery(REFRESH_WEATHER, getWeatherInfo);
    yield takeEvery(GET_WEATHER_FORECAST, getWeatherForecast);
}
