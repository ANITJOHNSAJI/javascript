
function rev(){
    let a=document.getElementById('input').value;
    let b=a.split("").reverse().join("");
    document.getElementById('p1').innerHTML=b
}