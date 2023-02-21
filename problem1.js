// const makeEven = (numbers) => {
//     let evenNumber = [];
//     for(number of numbers){
//         const even = number + 1;
//         evenNumber.push(even);
//     }
//     return evenNumber;
// }
const numbers = [1,3,5,7,9];
const makeEven = numbers.map(num => num + 1);
console.log(makeEven);

