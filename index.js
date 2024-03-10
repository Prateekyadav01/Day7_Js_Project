
const Products =[
    {
        id: 1,
        name: "Product-1",
        price:100
    },
    {
        id: 2,
        name: "Product-2",
        price:200
    },
    {
        id: 3,
        name: "Product-3",
        price:300
    }
]


let productList = document.getElementById("product");

Products.forEach(function(product) {
    let div = document.createElement("div");
    let paraId = document.createElement("p");
    let paraName = document.createElement("p");
    let paraPrice = document.createElement("p");


    let buttonDiv = document.createElement("div");
    let increment = document.createElement("button");
    let count = document.createElement("p");
    let decrement = document.createElement("button");

    paraId.textContent =   product.id;
    paraName.textContent =  product.name;
    paraPrice.textContent =  product.price;

    increment.textContent = "+";
    count.textContent = 0;
    decrement.textContent = "-";

    increment.style.width = "30px";
    increment.style.height = "30px";
    decrement.style.width = "30px";
    decrement.style.height = "30px";


    buttonDiv.appendChild(increment);
    buttonDiv.appendChild(count);
    buttonDiv.appendChild(decrement);
    buttonDiv.classList.add('button-js');

    div.appendChild(paraId);
    div.appendChild(paraName);
    div.appendChild(paraPrice);
    div.appendChild(buttonDiv);
    div.classList.add('product_js');

    productList.appendChild(div);


        increment.addEventListener("click", function() {
        count.textContent = parseInt(count.textContent) + 1;
    });
    decrement.addEventListener("click", function() {
        if(count.textContent>0){
            count.textContent = parseInt(count.textContent) - 1;
        }
    });
    
});
