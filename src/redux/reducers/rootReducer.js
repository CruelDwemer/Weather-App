import { combineReducers } from 'redux';
import items from './listReducer';
import selectedCityWeather from './weatherFetchReducer';

const rootReducer = combineReducers({
    items,
    selectedCityWeather
})

export default rootReducer;
