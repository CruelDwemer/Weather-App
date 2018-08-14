import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';

import { selectCities } from './redux/selectors';
import Item from './Item';

const apply = connect(
    state => ({
        cities: selectCities(state)
    })
)

class List extends Component {
    render() {
        const { cities } = this.props;
        return(
            <Row>
                {cities.map(item => (
                    <Col key={item.id} >
                    <Item
                        id={item.id}
                        name={item.name}
                        temp={item.temp}
                        wind={item.wind}
                        sky={item.sky}
                    />
                    </Col>
                ))}
            </Row>
        )
    }
}

export default apply(List);
