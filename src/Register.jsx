import React from 'react'
import Node from './Node'



const Register = ({input, getNodes, byte_arr, onChange = null, string = null, r = null}) => {


  const nodes = getNodes(r);
  const isInputField = input;
  if (input) {
    return (
      <div> {
        isInputField ? (
        <input 
          type ="text" 
          maxLength = "15"
          value={string}
          onChange={onChange(r)} 
        />
        ) : (
        <br></br>
        )}
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
  } else {
    return (
      <div>
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