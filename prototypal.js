const data={
    greet : function(){
        console.log('hello');
    }
}
a1=Object.create(data)
a1.greet()
console.log(a1);