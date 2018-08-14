import {
    ADD_ITEM,
    SET_WEATHER,
    REFRESH_WEATHER,
    GET_WEATHER_FORECAST,
    SET_WEATHER_FORECAST,
    DELETE_ITEM
} from '../constants';

export const addItem = (name) => ({
    type: ADD_ITEM,
    name
})

export const setWeather = (id, params) => ({
    type: SET_WEATHER,
    params,
    id
})

export const refreshWeather = (name, id) => ({
    type: REFRESH_WEATHER,
    name,
    id
})

export const getWeatherForecast = (name) => ({
    type: GET_WEATHER_FORECAST,
    name
})

export const setWeatherForecast = (params) => ({
    type: SET_WEATHER_FORECAST,
    params
})

export const deleteItem = (id) =>  ({
    type: DELETE_ITEM,
    id
})
