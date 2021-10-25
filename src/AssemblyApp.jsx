import React, {useState, useEffect} from 'react';
import './AssemblyApp.css';
import Register from './Register'
import NavBar from './NavBar'
import {
    ADD,
    AND, 
    OR, 
    IMUL
} from './x64'




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

const func_arr = [
   {
       name: "ADD",
       func: ADD,
   },

   {
       name: "AND",
       func: AND,
   },
   {
       name: "OR",
       func: OR,
   },
   {
       name:"IMUL",
       func: IMUL,
   }
    
];


const AssemblyApp = () => {
    const r1n = [];
    const r2n = [];
    const rxn = [];
    for (let row = 0; row < 1; row++) {
        const currentRow = [];
        for (let col = 0; col < 8; col++) {
            currentRow.push([]);
        }
        r1n.push(currentRow);
        r2n.push(currentRow);
        rxn.push(currentRow);
    }


    const [r1_value, set_r1_value] = useState(15);
    const [r1_string, set_r1_string] = useState('');
    const [r2_value, set_r2_value] = useState(2);
    const [r2_string, set_r2_string] = useState('');
    const [r1_nodes, set_r1_nodes] = useState(r1n);
    const [r2_nodes, set_r2_nodes] = useState(r2n);
    const [register_size, set_register_size] = useState(8);
    const [result_value, set_result_value] = useState(17);
    const [result_nodes, set_result_nodes] = useState(rxn);
    const [result_string, set_result_string] = useState('');
    const [func_idx, set_func_idx] = useState(0);

    useEffect(() => {
        //set_result_value(function(r1_value, r2_value))
        set_result_value(func_arr[func_idx].func(r1_value, r2_value));
    }, [r1_value, r2_value, func_idx]);

    const numToHexNode = (number) => {
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

    const changeValue = (r) => (event) => {
        let new_value = parseInt(event.target.value);
        if (r === 1) {
            set_r1_string(event.target.value);
            set_r1_value(new_value);
        } else if (r === 2) {
            set_r2_string(event.target.value);
            set_r2_value(new_value);
        } else {
            
        }
    }

    const getString = (r) => {
        if (r === 1) {
            return r1_string;
        } else if (r === 2) {
            return r2_string
        } else {
            return result_string;
        }
    }

    const getNodes = (r) => {
        if (r === 1) {
            return r1_nodes;
        } else if (r === 2) {
            return r2_nodes;
        } else if (r === 3){
            return result_nodes;
        }
    }

    const changeCommand = () => {
        let temp = func_idx + 1;
        if (temp === func_arr.length) {
            temp = 0;
        }
        set_func_idx(temp);
    }

    if (isNaN(r1_value)) {
        set_r1_value(0);
    }
    if (isNaN(r2_value)) {
        set_r2_value(0);
    }
    let x = numToHexNode(r1_value);
    let y = numToHexNode(r2_value);
    let r_x = numToHexNode(result_value);

    return (
        <div>
            <Register
                input = {true}
                onChange = {changeValue}
                getString = {getString}
                r = {1}
                getNodes = {getNodes}
                byte_arr = {x}
            />
            <Register 
                input = {true}
                onChange = {changeValue}
                getString = {getString}
                r = {2}
                getNodes = {getNodes}
                byte_arr = {y}
            />
            <button onClick={changeCommand}>{func_arr[func_idx].name}</button>
            <Register
                input = {false}
                onChange = {changeValue}
                getString = {getString}
                r = {3}
                getNodes = {getNodes}
                byte_arr = {r_x}
            />
            {result_value}
            
        </div>  
    );

}

export default AssemblyApp;