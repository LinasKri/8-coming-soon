import { average } from "./components/average.js";

import{matematika} from './components/matematika.js'

const rez5 = average(8, 5);

const rez1lt = matematika.sudeti(8, 5);
const rez2lt = matematika.atimti(8, 5);
const rez3lt = matematika.dauginti(8, 5);
const rez4lt = matematika.dalinti(8, 5);

const rez1en = matematika.sum(8, 5);
const rez2en = matematika.subtract(8, 5);
const rez3en = matematika.multiply(8, 5);
const rez4en = matematika.devide(8, 5);



console.log(rez1lt);
console.log(rez2lt);
console.log(rez3lt);
console.log(rez4lt);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);

console.log(rez5);
