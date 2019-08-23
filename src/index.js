/*
author: adilnomad @ github 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './Grid.jsx';
import Buttons from './Buttons.jsx';
import Simulations from './Simulations.jsx';
import { TimelineMax } from 'gsap';
import LifeForm from './lifeForm';

class Board extends React.Component {
	constructor() {
		super();
		this.speed = 300;
		this.rows = 25;
		this.cols = 50;
		this.myForm = null;

		this.state = {
			lifeForm: "Random",
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
	}

	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 5) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
	}

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 1000;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		clearInterval(this.intervalId);
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
		});
	}

	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);
		
		// filling up a grid 
		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
			if (i > 0) if (g[i - 1][j]) 
				count++;
			if (i > 0 && j > 0) if (g[i - 1][j - 1]) 
				count++;
			if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) 
				count++;
			if (j < this.cols - 1) if (g[i][j + 1]) 
				count++;
			if (j > 0) if (g[i][j - 1]) 
				count++;
			if (i < this.rows - 1) if (g[i + 1][j]) 
				count++;
			if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) 
				count++;
			if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) 
				count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: g2
		});

	}
	glider = () => {
		this.clear();
		this.pauseButton();
		let g2 = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		//encoding glider
		g2[1][4] = true;
		g2[2][4] = true;
		g2[3][4] = true;
		g2[3][3] = true;
		g2[2][2] = true;

		this.setState({
			gridFull: g2,
			lifeForm: "Glider"
		  });
		this.playButton();
	}

	pulsar = () => {
		this.clear();
		this.pauseButton();
		let g2 = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		//encoding pulsar pattern
		g2[10][10] = true;
		g2[9][10] = true;
		g2[8][10] = true;

		g2[11][9] = true;
		g2[11][8] = true;
		g2[11][7] = true;

		g2[13][9] = true;
		g2[13][8] = true;
		g2[13][7] = true;

		g2[14][10] = true;
		g2[15][10] = true;
		g2[16][10] = true;

		g2[10][12] = true;
		g2[9][12] = true;
		g2[8][12] = true;

		g2[11][13] = true;
		g2[11][14] = true;
		g2[11][15] = true;

		g2[13][13] = true;
		g2[13][14] = true;
		g2[13][15] = true;

		g2[14][12] = true;
		g2[15][12] = true;
		g2[16][12] = true;

		g2[6][7] = true;
		g2[6][8] = true;
		g2[6][9] = true;

		g2[6][13] = true;
		g2[6][14] = true;
		g2[6][15] = true;

		g2[18][7] = true;
		g2[18][8] = true;
		g2[18][9] = true;

		g2[18][13] = true;
		g2[18][14] = true;
		g2[18][15] = true;

		g2[10][5] = true;
		g2[9][5] = true;
		g2[8][5] = true;

		g2[14][5] = true;
		g2[15][5] = true;
		g2[16][5] = true;

		g2[10][17] = true;
		g2[9][17] = true;
		g2[8][17] = true;

		g2[14][17] = true;
		g2[15][17] = true;
		g2[16][17] = true;

		this.setState({
			gridFull: g2,
			lifeForm: "Pulsar"
		  });
		this.playButton();
	}

	componentDidMount() {
		this.seed();
		this.playButton();
		new TimelineMax({repeat:-1, yoyo:true}).fromTo("form", 30, { x:-10 }, { x: 10});
	}

	form = () => {
		var i = 1;
	}
 
	render() {
		return (
			<div>
				<h1>The Game of Life</h1>
				<LifeForm 
					lifeForm={this.state.lifeForm}
				/> 
				<Buttons 
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					fast={this.fast}
					clear={this.clear}
					seed={this.seed}
					gridSize={this.gridSize}
				/>
				<div className="placeHolder" >
				<Simulations
					gridFull={this.state.gridFull}
					glider={this.glider}
					pulsar={this.pulsar}	
				/>
				</div>
				<Grid 
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h3 className="credit">adilnomad @ github</h3>
			</div>
		);
	}
}


function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(<Board />, document.getElementById('root'));