// https://dummyjson.com/carts
// async function fetData(){
//     try{
//     const response=await fetch("https://dummyjson.com/carts");
//     // console.log('response',response);
//     const carts=await response.json()
//     console.log('carts',carts);
// }
// catch(error){
    // console.log('error',error);
// }
// }
// fetData()


// async function fetData(){
//     try{
//     const response=await fetch("https://dummyjson.com/products");
//     // console.log('response',response);
//     const products=await response.json()

//     // console.log('products',products);
//     const data=products.products
//     const div=document.querySelector(".div")
//     // console.log(data);
//     data.forEach((item)=>{
//         console.log(item.title);
//         const h1=document.createElement('h1')
//         h1.innerHTML=item.title
//         div.appendChild(h1)
//     })

// }
// catch(error){
//     console.log('error',error);
// }
// }
// fetData()


async function fetData(){
    try{
    const response=await fetch("https://dummyjson.com/products");
    // console.log('response',response);
    const products=await response.json()

    // console.log('products',products);
    const data=products.products
    const div=document.querySelector(".div")
    // console.log(data);
    data.forEach((item)=>{
        console.log(item);

    console
   
        div.innerHTML +=
        `
  <div class="col-lg-4">
  <div class="card" style="100%">
      
    <img class="card-img-top" src="${item.thumbnail}" alt="Card image" style="width:100%">
   
    <div class="card-body">

      <h4 class="card-title">${item.title}</h4>
        <p class="card-text">Category:${item.category}</p>
      <p class="card-text">${item.description}</p>
       <p class="card-text">DiscountPercentage${item.discountPercentage}</p>
        <p class="card-text">price:${item.price}</p>
         <p class="card-text">rating:${item.rating}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    </div>
    `
    })

}
catch(error){
    console.log('error',error);
}
}
fetData()