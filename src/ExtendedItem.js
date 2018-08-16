import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getSelectedCity, getForecast } from './redux/selectors';
import ExtendedItemDetail from './ExtendedItemDetail';

const apply = connect(
    state => ({
        name: getSelectedCity(state),
        params: getForecast(state)
    })
)

class ExtendedItem extends Component{

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
        )
    }

    render() {
        const { params, name } = this.props;
        return(
            <div>
                <h2>{name}</h2>
                {params ? this.renderForecast() : <div>...Loading...</div>}
            </div>
        )
    }
}

export default apply(ExtendedItem);
