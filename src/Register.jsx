import React, {Component} from 'react'
import Node from './Node'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: this.props.r,
      value: this.props.value,
      string: this.props.string,
      nodes: this.props.nodes,
      changeValue: this.props.changeValue,
      numToHex: this.props.numToHex
    }
  }

  render() {
    let x = this.state.numToHex(this.state.value);
    return (
      <div>
        <input 
          type ="text" 
          value={this.state.string} 
          onChange={this.state.changeValue(this.state.r)} 
        />
        <div className= "grid">
            {this.state.nodes.map((row, rowIdx) => {
                return <div>{
                    row.map((node, nodeIdx) => <Node hex={x[nodeIdx]}></Node>)          
                }
                </div>
            })}
        </div>
      </div>
    );
  }
}