
export const ADD = (s, d) => {
  return s + d;
}

export const AND = (s, d) => {
  return s & d;
}

export const OR = (s, d) => {
  return s | d;
}

export const IMUL = (s, d) => {
  return s * d;
}




/*
function ADD(s, d) {
  return d + s; 
}

export default function OR(s, d) {
  return d | s;
}

export function SUB(s, d) {
  return d - s;
}

export function AND(s, d) {
  return d & s;
}

export function XOR(s, d) {
  return d ^ s;
}

export function ADDSUBPS(xmm0_bytes, xmm1_bytes) {
  let new_bytes = [];
  if (xmm1_bytes.length != xmm0_bytes.length) {
    return null;
  }
  for (let i = 0; i < xmm0_bytes.length; i++) {
    if (i % 2 === 0) {
      new_bytes[i] = xmm0_bytes[i] + xmm1_bytes[i];
    } else {
      new_bytes[i] = xmm0_bytes[i] - xmm1_bytes[i];

    }
  }
} 

export function MPSADBW(xmm0, xmm1, imm_byte) {
  if (xmm0.length != 16 || xmm1.length != 16) {
    return null;
  }

  let block_field = imm_byte & 3;
  let transform_block = [];
  for (let i = 0; i < 4; i++) {
    transform_block[i] = xmm1[ 
      (xmm0.length - 1) - (block_field * 4) - (3 - i) ];
  }

  let start_field = (imm_byte & 4) ? 0 : 4;

  let sum_array = [];
  
  for (let shifts = 0; shifts < 8; shifts++) {
    let compare_begin = xmm0.length - 1 - shifts - 3;
    let compare_end = xmm0.length - shifts;
    const compare_block = xmm0.slice(compare_begin, compare_end);
    let sum = 0;
    for (let i = 0; i < 4; i++) {
       sum += compare_block[i] - transform_block[i];
    }
    sum_array[shifts] = sum;

  }

  return sum_array;
  //or return sum_array converting the 8 16 byte values into 16 8 byte values



} */

