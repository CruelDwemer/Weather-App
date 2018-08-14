import { ADD_ITEM, SET_WEATHER, DELETE_ITEM} from '../constants';

const initialState = {
    cities: [
        {id: 0, name: 'Moscow', temp: '', wind: '', sky: ''}
    ]
};

const items = (state = initialState, action) => {
    let { cities } = state;
    switch (action.type) {
        case ADD_ITEM:
            cities = [...state.cities, { id: new Date().getTime(), name: action.name, temp: '', wind: '', sky: '' }]
            return {...state, cities}
        case SET_WEATHER:
            cities = cities.map(city => {
                if(city.id == action.id) {
                    city.temp = action.params.temp;
                    city.wind = action.params.wind;
                    city.sky = action.params.sky;
                    return city;
                }
                else return city;
            })
            return {...state, cities}
        case DELETE_ITEM:
            cities = state.cities.filter(item => item.id != action.id)
            return {...state, cities}
        default:
            return state;
    }
}

export default items;
