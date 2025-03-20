// callback 
// function Todo(task,callback){
//     console.log('starting',task);
//     setTimeout(()=>{
//         console.log('ending',task);
//         callback()
//     },1000)

// }
// Todo("task1",()=>console.log('task1 completed'))

// callback hell 

// function step1(callback){
//     setTimeout(()=>{
//         console.log('step1 completed');
//         callback()
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log('step2 completed');
//         callback()
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log('step3 completed');
//         callback()
//     },1000)
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('all steps completed');
//         })
//     })
// })

// function todo(task,callback){
//     console.log('string',task);
//     setTimeout(() => {
//         console.log('ending',task);
//         callback()
//     }, 1000);
// }
// todo("task1",()=>console.log('task1 complated')
// )



// function step1(callback){
//     setTimeout(()=>
//     {
//         console.log('step1 complated');
//         callback()
//     },1000)
// }

// function step2(callback){
//     setTimeout(()=>
//     {
//         console.log('step2 complated');
//         callback()
//     },1000)
// }

// function step3(callback){
//     setTimeout(()=>
//     {
//         console.log('step3 complated');
//         callback()
//     },1000)
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("all step complated");
            
//         })
//     })
// })



function step1(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>
            {
                console.log('step1 complated');
                resolve()
            },1000)

    })
}

function step2(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>
            {
                console.log('step2 completed');
                resolve()
            },1000)

    })
}

function step3(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>
            {
                console.log('step3 completed');
                resolve()
            },1000)

    })
}

step1()
.then(step2)
.then(step3)
.then(()=>{
    console.log('all step completed');
    
})