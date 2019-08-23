
import React from 'react';
import './index.css';
import  { ButtonToolbar } from 'react-bootstrap';

class Buttons extends React.Component {

	render() {
		return (
			<div className="center">
				<ButtonToolbar>
					<button className="button" onClick={this.props.playButton}>
					  Start Life
					</button>
					<button className="button" onClick={this.props.pauseButton}>
					  Pause Life
					</button>
					<button className="button" onClick={this.props.clear}>
					  Terminate Life
					</button>
					<button className="button" onClick={this.props.slow}>
					  Slow down Simulation
					</button>
					<button className="button" onClick={this.props.fast}>
					  Speed up Simulation
					</button>
					<button className="button" onClick={this.props.seed}>
					  Seed Life
					</button>
				</ButtonToolbar>
			</div>
			)
	}
}

export default Buttons;