const data=new Promise((resolve,reject)=>{
    if(true){
        resolve('resolved')
    }else{
        reject('rejected')
    }
})
console.log(data);
data.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
}).finally(()=>{
    console.log('finally');
})