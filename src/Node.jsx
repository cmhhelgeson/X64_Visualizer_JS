import React, {Component} from 'react';
import './Node.css'
export default class Node extends Component {
    constructor(hex) {
        super(hex);
        this.state = {};
    }
    render() {
        return (
            <div className="node">
                {this.props.hex}
            </div>
        );   
    }
}