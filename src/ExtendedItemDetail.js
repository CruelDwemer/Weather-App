import React, { Component } from 'react';

export default class ExtendedItemDetail extends Component {

    showTime() {
        const newTime = new Date(this.props.time);
        return (`${newTime.getHours()}:${newTime.getMinutes()}`)
    }

    render () {
        const { index, time, temp, wind, sky } = this.props;
        return (
            <tr>
                <th>{index + 1}</th>
                <td>{time || ''}</td>
                <td>Temperature: {temp ? Math.round((temp - 273.15) * 100) / 100 : ''}</td>
                <td>Wind speed: {wind || ''}</td>
                <td>{sky || ''}</td>
            </tr>
        );
    }
}