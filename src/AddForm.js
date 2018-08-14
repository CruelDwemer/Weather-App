import { connect } from 'react-redux';
import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

import { addItem } from './redux/actions';

const apply = connect(
    null,
    { addItem: addItem }
)

class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        }
    }
    
    OnInputChange = e => {
        this.setState({ inputValue: e.target.value });
    }

    addItem = () => {
        this.props.addItem(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <InputGroup>
                <Input onChange={this.OnInputChange} value={this.state.inputValue} />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.addItem}>ADD</Button>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}

export default apply(AddForm);
