/*
author: adilnomad @ github 
*/

import React from 'react';
import './index.css';
import { ButtonToolbar } from 'react-bootstrap';
import { TimelineMax } from 'gsap';
import Box from'./Box.jsx';


class Grid extends React.Component {
    //a grid that contains Box cells 
	constructor() {
		super();
		this.myBoard = null;
	}

	componentDidMount() {
        // kickstart animation
            new TimelineMax({repeat:-1, yoyo:true}).fromTo(this.myBoard, 30, { x:-10 }, { x: 10});
            new TimelineMax({repeat:-1, yoyo:true}).fromTo(this.myBoard, 30, { y:-10 }, { y: 10});
	}
	
	render() {
		const width = (this.props.cols * 17);
		var rowsArr = [];

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;
				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}

		return (
			<div className="grid" style={{width: width}} ref={div => (this.myBoard = div)}>
				{rowsArr}
			</div>
		);
	}
}

export default Grid;