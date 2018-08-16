export const selectCities = state => state.items.cities;
export const getForecast = state => state.selectedCityWeather.params;
export const getSelectedCity = state => state.selectedCityWeather.name;
