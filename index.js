



let productList = document.getElementById("product");
let cartItem = document.getElementById('cartItem');
console.log(cartItem)

Products.forEach(function (product) {

    var{id , name , price} = product;

    let div = document.createElement("div");
    let paraId = document.createElement("p");
    let paraName = document.createElement("p");
    let paraPrice = document.createElement("p");


    let buttonDiv = document.createElement("div");
    let increment = document.createElement("button");
    let count = document.createElement("p");
    let decrement = document.createElement("button");

    paraId.textContent = product.id;
    paraName.textContent = product.name;
    paraPrice.textContent = product.price;

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


    increment.addEventListener("click", function () {
        count.textContent = parseInt(count.textContent) + 1;
        
        cartChange(count.textContent,id);
    });



    decrement.addEventListener("click", function () {
        if (count.textContent > 0) {
            count.textContent = parseInt(count.textContent) - 1;
        }
    });




});
function cartChange(cnt, id) {
    let cartItems = cartItem.querySelectorAll('p');
    let found = false;
    // console.log(cartItems);
    cartItems.forEach(item => {
        if (item.textContent.includes("Product-" + id)) {
            let price = Products[id - 1].price * cnt;
            item.nextElementSibling.textContent = price;
            found = true;
        }
    });

    if (!found) {
        let cartDiv = document.createElement("div");
        let cartPara = document.createElement("p");
        let cartParaPrice = document.createElement("p");

        cartPara.textContent = "Product-" + id;
        cartParaPrice.textContent = (Products[id - 1].price * cnt);

        cartDiv.appendChild(cartPara);
        cartDiv.appendChild(cartParaPrice);

        cartItem.appendChild(cartDiv);
    }

    if (cartItems.length === 0) {
        let emptyCartMessage = document.createElement("p");
        // emptyCartMessage.textContent = "Your cart is empty.";
        cartItem.appendChild(emptyCartMessage);
    } else {
        let emptyCartMessage = cartItem.querySelector("p");
        if (emptyCartMessage && cartItems.length === 1 && !found) {
            emptyCartMessage.remove();
        }
    }
}




// function cartChange(cnt,id){
//     console.log(cnt,id)
//     let cartDiv = document.createElement("div");
//     let cartPara = document.createElement("p");
//     let cartParaPrice = document.createElement("p");

//     if(id===1){
//         cartItem.innerHTML = "";
//         cartPara.textContent = "Product-1";
//         cartParaPrice.textContent = 100*cnt;
//         cartDiv.appendChild(cartPara);
//     }
//     else if(id===2){
//         cartItem.innerHTML = "";
//         cartPara.textContent = "Product-2";
//         cartParaPrice.textContent = 200*cnt;
//         cartDiv.appendChild(cartPara);
//     }
//     else{
//         cartItem.innerHTML = "";
//         cartPara.textContent = "Product-3";
//         cartParaPrice.textContent = 300*cnt;
//         cartDiv.appendChild(cartPara);
//     }
//     cartItem.appendChild(cartDiv);
// }


// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// cart.push(cnt);
// localStorage.setItem("cart", JSON.stringify(cart));
// cartItem.textContent = cart.length;