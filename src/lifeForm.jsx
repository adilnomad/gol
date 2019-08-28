import React from 'react';
import './index.css';
import { TimelineMax } from 'gsap';

class LifeForm extends React.Component {
    constructor() {
        super();
        this.myForm = null;
    }
	componentDidMount() {
        // kickstart animation
            new TimelineMax({repeat:-1, yoyo:true}).fromTo(this.myForm, 4, 
                { opacity:0.7, scale:1 }, { opacity:1, scale:1.3 });
	}
    render() {
        return (
            <h2 className="form" ref={div => (this.myForm = div)}>Life Form: {this.props.lifeForm}</h2>
        );
    }
}

export default LifeForm;