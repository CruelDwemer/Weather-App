import { SET_WEATHER_FORECAST } from '../constants';

const selectedCityWeather = (state = {}, action) => {
    if(action.type === SET_WEATHER_FORECAST) {
        const { params } = action;
        return {...state, params}
    } else return state
}

export default selectedCityWeather;
