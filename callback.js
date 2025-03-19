// const a =[1,2,3,4,5,6]
// function data(a,b,callback){
//     const c=a+b
//     callback(c)
// }
// function display(c){
//     console.log(c);
// }
// data(10,2,display)
// data(112,2,display)

// const data={
//  fname:"manu",
//     lname:"lal",
//     fullname:function(){
//         console.log(this.fname,this.lname);
// }
// }
// console.log(data);  
// data.fullname()

// call
// const nameobj={
//     fname:"anil",
//     age:20

// }
// const data={
//     fname:"manu",
//        lname:"lal",
//        fullname:function(age){
//            console.log(this.fname,age);
//    }
//    }
//    console.log(data);  
// //    data.fullname.call(nameobj)
// const d1=data.fullname.bind(nameobj,18)
// d1()

// apply
const person ={
    name:"anil",
}
function data(job,com){
    console.log(this.name,job,com);
}
data.apply(person,["developer","google"])