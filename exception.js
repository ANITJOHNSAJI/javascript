// try{
//     console.log(a);
// }
// catch(error){
//     console.log('error',error.message);
// }
// finally{
//     console.log(' prgm ends');
// }

try{
    const a=parseInt('abc')
    // console.log(a);
    if (isNaN(a)) {
        throw new Error('a is not a number')
}
}
catch(error){
    console.log('error',error.message);
}
finally{
    console.log(' prgm ends');
}