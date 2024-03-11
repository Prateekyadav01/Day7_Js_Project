
// const Products = [
//     {
//         id: 1,
//         name: "Product-1",
//         price: 100,
        
//     },
//     {
//         id: 2,
//         name: "Product-2",
//         price: 200
//     },
//     {
//         id: 3,
//         name: "Product-3",
//         price: 300
//     }
// ]


// let productList = document.getElementById("product");
// let cartItem = document.getElementById('cartItem');
// let total = document.getElementById('total');
// console.log(cartItem)

// Products.forEach(function (product) {

//     var{id , name , price} = product;

//     let div = document.createElement("div");
//     div.innerHTML=`
//     <p>${id}</p>
//     <p>${name}</p>
//     <p>${price}</p>`
//     let paraId = document.createElement("p");
//     let paraName = document.createElement("p");
//     let paraPrice = document.createElement("p");


//     let buttonDiv = document.createElement("div");
//     let increment = document.createElement("button");
//     let count = document.createElement("p");
//     let decrement = document.createElement("button");

//     paraId.textContent = product.id;
//     paraName.textContent = product.name;
//     paraPrice.textContent = product.price;

//     increment.textContent = "+";
//     count.textContent = 0;
//     decrement.textContent = "-";

//     increment.style.width = "30px";
//     increment.style.height = "30px";
//     decrement.style.width = "30px";
//     decrement.style.height = "30px";


//     buttonDiv.appendChild(increment);
//     buttonDiv.appendChild(count);
//     buttonDiv.appendChild(decrement);
//     buttonDiv.classList.add('button-js');

//     div.appendChild(paraId);
//     div.appendChild(paraName);
//     div.appendChild(paraPrice);
//     div.appendChild(buttonDiv);
//     div.classList.add('product_js');

//     productList.appendChild(div);


//     increment.addEventListener("click", function () {
//         count.textContent = parseInt(count.textContent) + 1;
        
//         cartChange(count.textContent,id);
//     });




//     decrement.addEventListener("click", function () {
//         if (count.textContent > 0) {
//             count.textContent = parseInt(count.textContent) - 1;    
//         }

//     });




// });


// function cartChange(cnt, id) {
//     let sum = 0;
//     let cartItems = cartItem.querySelectorAll('p');
//     let found = false;
//     let itemPrice = Products[id - 1].price;

//     cartItems.forEach(item => {
//         if (item.textContent.includes("Product-" + id)) {
//             let price = item.nextElementSibling.textContent = itemPrice * cnt;
//             found = true;
//             sum += price;
//         }
//     });

//     if (!found && cnt > 0) {
//         let cartDiv = document.createElement("div");
//         let cartPara = document.createElement("p");
//         let cartParaPrice = document.createElement("p");

//         cartPara.textContent = "Product-" + id;
//         cartParaPrice.textContent = itemPrice * cnt;

//         cartDiv.appendChild(cartPara);
//         cartDiv.appendChild(cartParaPrice);

//         cartItem.appendChild(cartDiv);

//         sum += itemPrice * cnt;
//     }

//     if (cartItems.length === 0) {
//         let emptyCartMessage = document.createElement("p");
//         cartItem.appendChild(emptyCartMessage);
//     } else {
//         let emptyCartMessage = cartItem.querySelector("p");
//         if (emptyCartMessage && cartItems.length === 1 && !found) {
//             emptyCartMessage.remove();
//         }
//     }

//     total.textContent = sum +".00";
// }





// // function cartChange(cnt,id){
// //     console.log(cnt,id)
// //     let cartDiv = document.createElement("div");
// //     let cartPara = document.createElement("p");
// //     let cartParaPrice = document.createElement("p");

// //     if(id===1){
// //         cartItem.innerHTML = "";
// //         cartPara.textContent = "Product-1";
// //         cartParaPrice.textContent = 100*cnt;
// //         cartDiv.appendChild(cartPara);
// //     }
// //     else if(id===2){
// //         cartItem.innerHTML = "";
// //         cartPara.textContent = "Product-2";
// //         cartParaPrice.textContent = 200*cnt;
// //         cartDiv.appendChild(cartPara);
// //     }
// //     else{
// //         cartItem.innerHTML = "";
// //         cartPara.textContent = "Product-3";
// //         cartParaPrice.textContent = 300*cnt;
// //         cartDiv.appendChild(cartPara);
// //     }
// //     cartItem.appendChild(cartDiv);
// // }


// // let cart = JSON.parse(localStorage.getItem("cart")) || [];
// // cart.push(cnt);
// // localStorage.setItem("cart", JSON.stringify(cart));
// // cartItem.textContent = cart.length;



  
document.addEventListener("DOMContentLoaded", function() {
    const Products = [
      { id: 1, name: 'Product-1', price: 100 },
      { id: 2, name: 'Product-2', price: 200 },
      { id: 3, name: 'Product-3', price: 300 },
    ];
  
    let cart = [];
  
    // Function to render products
    function renderProducts() {
      const productList = document.getElementById("productList");
      productList.innerHTML = "";
      Products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
          <span>${product.name} - $${product.price}</span>
          <button onclick="addToCart(${product.id})">+</button>
          <span id="quantity_${product.id}">0</span>
          <button onclick="removeFromCart(${product.id})">-</button>
        `;
        productList.appendChild(productItem);
      });
    }
  
    // Function to render cart
    function renderCart() {
      const cartElement = document.getElementById("cart");
      cartElement.innerHTML = "";
      if (cart.length <= 0) {
        cartElement.innerHTML = "<p>No Product added to the cart</p>";
      } else {
        cart.forEach(item => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <span>Quantity: ${item.quantity}</span>
          `;
          cartElement.appendChild(cartItem);
        });
        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.getElementById("totalPrice").textContent = `Total Price: $${totalPrice}`;
      }
    }
  
    window.addToCart = function(productId) {
      const product = Products.find(p => p.id === productId);
      const cartItem = cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
      }
      renderCart();
      renderProducts();
    }
  
    // Function to remove product from cart
    window.removeFromCart = function(productId) {
      const index = cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        const cartItem = cart[index];
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          cart.splice(index, 1);
        }
      }
      renderCart();
      renderProducts();
    }
  
    renderProducts();
    renderCart();
  });