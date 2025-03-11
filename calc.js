
function add(){
    let a=document.getElementById('a');
    let b=document.getElementById('b');
    document.getElementById('p1').innerHTML=parseInt(a.value)+parseInt(b.value)
}

function sub(){
    let a=document.getElementById('a');
    let b=document.getElementById('b');
    document.getElementById('p1').innerHTML=parseInt(a.value)-parseInt(b.value)
}

function mul(){
    let a=document.getElementById('a');
    let b=document.getElementById('b');
    document.getElementById('p1').innerHTML=parseInt(a.value)*parseInt(b.value)
}

function div(){
    let a=document.getElementById('a');
    let b=document.getElementById('b');
    document.getElementById('p1').innerHTML=parseInt(a.value)/parseInt(b.value)
}

function mod(){
    let a=document.getElementById('a');
    let b=document.getElementById('b');
    document.getElementById('p1').innerHTML=parseInt(a.value)%parseInt(b.value)
}