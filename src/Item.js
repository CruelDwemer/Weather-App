import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import { refreshWeather, deleteItem } from './redux/actions';

const apply = connect(
    null,
    {
        refreshWeather: refreshWeather,
        deleteItem: deleteItem
     }
)

class Item extends Component{

    componentDidMount() {
        const { id, name, temp, wind, sky, refreshWeather } = this.props;
        if(temp == '' || wind == '' || sky == '') {
            refreshWeather(name, id);
        }
    };

    render() {
        const { id, name, temp, wind, sky, deleteItem } = this.props;
        return(
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <Link to={{ pathname: `/${id}`}}>
                    <CardTitle>{name}</CardTitle>
                </Link>
                <CardText>Temperature: {temp ? Math.round((temp - 273.15) * 100) / 100 : 'no data'}</CardText>
                <CardText>Wind speed: {wind || 'no data'}</CardText>
                <CardText>{sky}</CardText>
                <Button onClick={() => deleteItem(id)}>X</Button>
            </Card>
        )
    }
}

export default apply(Item);
