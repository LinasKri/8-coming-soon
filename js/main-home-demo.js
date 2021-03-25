//import suma from './components/sum.js';
//import {multyply} from './components/multiply.js';
//import devide from './components/devide.js';

//import{sum, minus, multiply, devide} from './components/matematika.js';
import{ matematika } from './components/matematika.js';

const rez1 = matematika.sudeti (8, 5);
const rez2 = matematika.atimti (8, 5)
const rez3 = matematika.sudauginti (8, 5)
const rez4 = matematika.dalinti (8, 5)

const rez1en = matematika.sum (8, 5);
const rez2en = matematika.substract (8, 5)
const rez3en = matematika.multiply (8, 5)
const rez4en = matematika.devide (8, 5)

console.log(rez1);
console.log(rez2);
console.log(rez3);
console.log(rez4);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);