const data=new Promise((resolve,reject)=>{
    if(true){
        resolve('resolved')
    }else{
        reject('rejected')
    }
})
console.log(data)