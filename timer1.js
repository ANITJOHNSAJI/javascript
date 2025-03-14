const p=document.querySelector("p");
let m=1;
let s=59;
const x=setInterval(()=>{
    s--;
    p.innerHTML=`${m}:${s}`
    if(s===0){
        m--;
        s=59
        if(m<0){
            clearInterval(x)
        }
    }
},1000)