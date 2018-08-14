import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { selectCities, getForecast } from './redux/selectors';
import ExtendedItemDetail from './ExtendedItemDetail';
import { getWeatherForecast } from './redux/actions';

const apply = connect(
    state => ({
        cities: selectCities(state),
        params: getForecast(state)
    }),
    {getWeatherForecast: getWeatherForecast}
)

class ExtendedItem extends Component{
    constructor() {
        super();
        this.state = {
            selectedCity: {
                name: ''
            }
        }
    }

    componentDidMount() {
        this.selectCity();
    };

    selectCity = () => {
        const { cities, match, getWeatherForecast } = this.props;
        const selected = cities.filter(city => city.id === +match.params.id);
        const selectedCity = selected[0];
        this.setState({ selectedCity });
        getWeatherForecast(selectedCity.name);
    }

    renderForecast () {
        const { params } = this.props;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Temperature</th>
                        <th>Wind speed</th>
                        <th>Sky</th>
                    </tr>
                </thead>
                <tbody>
                {params.map((item, index) => (
                    <ExtendedItemDetail
                        key={index}
                        index={index}
                        time={item.dt_txt}
                        temp={item.main.temp}
                        wind={item.wind.speed}
                        sky={item.weather[0].description}
                    />
                ))}
                </tbody>
            </Table>
    )}

    render() {
        const { params } = this.props;
        return(
            <div>
                <h2>{this.state.selectedCity.name}</h2>
                {params ? this.renderForecast() : <div>...Loading...</div>}
            </div>
        )
    }
}

export default apply(ExtendedItem);
