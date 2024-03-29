/*
author: adilnomad @ github 
*/
import React from 'react';
import ReactDOM from 'react-dom';


//a box representing a cell in the grid
class Box extends React.Component {

	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.col);
	}
	render() {
		return (
			<div
				className={this.props.boxClass}
				id={this.props.id}
				onClick={this.selectBox}
			/>
		);
	}
}

export default Box;