import React from 'react';
import './index.css';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

class Simulations extends React.Component {

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <ButtonGroup classname="vertical">
                    <button className="button" onClick={this.props.glider}>
                        Glider
                    </button>
                    </ButtonGroup>
                    <ButtonGroup className="vertical">
                    <button className="button" onClick={this.props.pulsar}>
                        Pulsar
                    </button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Simulations;