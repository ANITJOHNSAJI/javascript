// let a=[1,2,3,4]
// let [b,c,...d]=a
// console.log(b);
// console.log(c);
// console.log(d);

let a = { name: "anit", age: 21, mark1:56, mark2:67 }
let { name, age, ...mark } = a
console.log(name);
console.log(age);
console.log(mark);