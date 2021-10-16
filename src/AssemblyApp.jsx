import React, {Component} from 'react';
import './AssemblyApp.css';
import Register from './Register'
import NavBar from './NavBar'


const command_object = {
    Intel: {
        Comment: ";",
        Immediate:""
    }, 
    ATT: {
        Comment:"//",
        Immediate:"$"
    }, 

    ADD: {
        Intel: "add eax, ebx", //add eax to ebx, store result in eax
        ATT: "addq %ebx %eax"
    }
}

export default class AssemblyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r_one_value: 15,
            r_one_string: "",
            r_two_value: 2,
            r_two_string: "",
            nodes: [],
            r_one_nodes : [],
            r_two_nodes : [],
            result_value: 17,
            result_nodes : [],
            register_size: 8
        };
    }
    componentDidMount() {
        const nodes = [];
        const r_one_nodes = [];
        const r_two_nodes = [];
        for (let row = 0; row < 1; row++) {
            const currentRow = [];
            for (let col = 0; col < this.state.register_size; col++) {
                currentRow.push([]);
            }
            nodes.push(currentRow);
            r_one_nodes.push(currentRow);
            r_two_nodes.push(currentRow);

        }
        this.setState({nodes});
        this.setState({r_one_nodes});
        this.setState({r_two_nodes});
        
    }

    numToHexNode(number) {
        let hexString = number.toString(16);
        let padded_string = "";

        for (let i = 0; i < 16 - hexString.length; i++) {
            padded_string += "0";
        }
        padded_string += hexString;
        

        let byte_arr = [];
        let byte_idx = 0;
        for (let i = 0 ; i < 8; i++) {
            byte_arr[i] = padded_string.substring(byte_idx, byte_idx + 2);
            byte_idx += 2;
        }

        //return hexString;
        return byte_arr;
    }

    changeResult = () => {
        this.setState({result_value: 
            (this.state.r_one_value + 
                this.state.r_two_value)});

    }

    changeValue = (r) => (event) => {
        let new_value = parseInt(event.target.value);
        if (r === 1) {
            this.setState({r_one_string: event.target.value});
            this.setState({r_one_value: new_value});
        } else if (r === 2) {
            this.setState({r_two_string: event.target.value});
            this.setState({r_two_value: new_value});
        }

        this.changeResult();

    }

    handleEvent = (event) => {
        if (event.type === "mousedown") {
            this.setState({message:"Mouse Down"});
        } else {
            this.setState({message: "Mouse Up"});
        }
    }

    getString = (r) => {
        if (r === 1) {
            return this.state.r_one_string;
        }
    }

    getNodes = (r) => {
        if (r === 1) {
            return this.state.r_one_nodes;
        } else if (r === 2) {
            return this.state.r_two_nodes;
        } else {
            return this.state.result_nodes;
        }
        return null;
    }

    
    render() {
        if (isNaN(this.state.r_one_value)) {
            this.setState({r_one_value: 0});
        }
        if (isNaN(this.state.r_two_value)) {
            this.setState({r_two_value: 0});
        }
        const {nodes} = this.state;
        let one= 1;
        let x = this.numToHexNode(this.state.r_one_value);
        let y = this.numToHexNode(this.state.r_two_value);
        let r_x = this.numToHexNode(this.state.result_value);
        console.log(nodes);
        return (
        <div>
            <Register
                input = {true}
                onChange = {this.changeValue.bind(this)}
                getString = {this.state.getString}
                r = {one}
                getNodes = {this.getNodes.bind(this)}
                byte_arr = {x}
            />
            <Register 
                input = {true}
                onChange = {this.changeValue.bind(this)}
                getString = {this.state.getString}
                r = {2}
                getNodes = {this.getNodes.bind(this)}
                byte_arr = {y}
            />
            <Register
                input = {false}
                r = {3}
                getNodes = {this.getNodes.bind(this)}
                byte_arr = {r_x}
            />

        </div>   
    
            

        ); 
        
    }
} 




/*export <input type ="text" value={this.state.r_one_string} onChange={this.changeValue(1)} />
            <div className= "grid">
                {this.state.r_one_nodes.map((row, rowIdx) => {
                    return <div>{
                        row.map((node, nodeIdx) => <Node hex={x[nodeIdx]}></Node>)          
                    }
                    </div>
                })}
            </div>
            <input type ="text" value={this.state.r_two_string} onChange={this.changeValue(2)} />
            <div className= "grid">
                {this.state.r_two_nodes.map((row, rowIdx) => {
                    return <div>{
                        row.map((node, nodeIdx) => <Node hex={y[nodeIdx]}></Node>)          
                    }
                    </div>
                })}
            </div>
            </div>
        </div> */