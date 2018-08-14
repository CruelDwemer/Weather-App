import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';

import AddForm from './AddForm';
import List from './List';

export default class Main extends Component {
    render () {
        console.log(this.props);
        return (
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <AddForm />
                    <List />
                </Col>
            </Row>
        );
    }
}
