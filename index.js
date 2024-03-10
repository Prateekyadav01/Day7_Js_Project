

console.log(Products);

let main = document.getElementById("main");

// Products.forEach(function(product) {
//     let div = document.createElement("div");
//     let increment = document.createElement("button");
//     let decrement = document.createElement("button");
//     let li = document.createElement("span");
//     let li1 = document.createElement("span");
//     let li2 = document.createElement("span");
//     li.textContent = product.id;
//     li1.textContent = product.name;
//     li2.textContent = product.price;
//     div.appendChild(li);
//     div.appendChild(li1);
//     div.appendChild(li2);
//     increment.style.width="100px";
//     increment.style.height="100px";
//     increment.innerHTML = "+";
//     decrement.style.width="100px";
//     decrement.style.height="100px";
//     decrement.innerHTML = "-";
//     div.appendChild(increment);
//     div.appendChild(decrement);
//     main.appendChild(div);
// });

const ProductsItem = [...new Set(Products.map((item)=>{
    return item
}))]

let i=0;
document.getElementById('root').innerHTML=ProductsItem.map((item)=>{

    var{ id , name , price}= item;
    return(
        `<div class='box'>
        <div class='img-box'>
         <p class='number'>${id}</p>
         <p>${name}</p>
         <p>${price}.00</p>`+
         "<button onclick='+("+(i++)+")'>+</button>"+
         `</div>
         </div>`
    )
}).join('');