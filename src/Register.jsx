import React from 'react'
import Node from './Node'



const Register = ({onChange, string, r, getNodes, byte_arr}) => {


  const nodes = getNodes(r);
  return (
    <div>
        <input 
          type ="text" 
          maxLength = "15"
          value={string}
          onChange={onChange(r)} 
        />
        <div className= "grid">
          {nodes.map((row, rowIdx) => {
            return <div> {
              row.map((node, nodeIdx) => <Node hex={byte_arr[nodeIdx]}></Node>)          
            }
            </div>
          })}
        </div>
      </div>

  );


}


export default Register;







  /*
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
} */