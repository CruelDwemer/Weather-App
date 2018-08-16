import { SET_WEATHER_FORECAST, GET_WEATHER_FORECAST } from '../constants';

const selectedCityWeather = (state = {}, action) => {
    if(action.type === SET_WEATHER_FORECAST) {
        const { params } = action;
        return {...state, params}
    } else if(action.type === GET_WEATHER_FORECAST) {
        const { name } = action;
        return {...state, name};
    } 
    else return state
}

export default selectedCityWeather;
