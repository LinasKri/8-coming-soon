const sum = (a, b) => a + b;
const minus = (a, b) => a -b;
const multiply = (a, b) => a * b;
const devide = (a, b) => a / b;

const matematika = {
    sudeti: sum,
    atimti: minus,
    sudauginti: multiply,
    dalinti: devide,
    
    sum: sum,
    substract: minus,
    multiply: multiply,
    devide: devide
}

export { matematika }