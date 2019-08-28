import React from 'react';
import './index.css';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

class Simulations extends React.Component {
    constructor() {
        super();
        this.gliderInfo = "Name: Glider<br /> Class: Spaceship<br /> Period: 3";
        this.pulsarInfo = "Name: Pulsar<br /> Class: Oscillator<br /> Period: 3";
        this.pentInfo = "Name: Pentadecathlon<br /> Class: Oscillator<br /> Period: 12";
        this.tumblerInfo = "Name: Tumbler<br /> Class: Oscillator<br /> Period: 14";
    }

    render() {
        return (
            <div>
                <ReactTooltip className="infoSize" place="left" html={true} />
                <ButtonToolbar>
                    <ButtonGroup classname="vertical">
                    <button className="button" onClick={this.props.glider} 
                    data-tip={this.gliderInfo} multiline={true}>
                        Glider
                    </button>
                    </ButtonGroup>
                    <ButtonGroup className="vertical">
                    <button className="button" onClick={this.props.pulsar}
                    data-tip={this.pulsarInfo} multiline={true}>
                        Pulsar
                    </button>
                    </ButtonGroup>
                    <ButtonGroup className="vertical">
                    <button className="button" onClick={this.props.pentadecathlon}
                    data-tip={this.pentInfo} multiline={true}>
                        Pentadecathlon
                    </button>
                    </ButtonGroup>
                    <ButtonGroup className="vertical">
                    <button className="button" onClick={this.props.tumbler}
                    data-tip={this.tumblerInfo} multiline={true}>
                        Tumbler
                    </button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}
export default Simulations;