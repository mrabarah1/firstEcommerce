const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector(".amount");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrapper");
const indicator = document.querySelector(".indicator");
const cartContent = document.querySelector(".cart-content");
const addBtn = document.querySelector(".add-to-cart");
const heartShape = document.querySelector(".heart-shape");


let amountValue = 0;

indicator.style.display = "none";

const handlePlus = () => {
    amountValue++;
    amount.innerText = amountValue;
}

const handleMinus = () => {
    if(amountValue > 0) {
        amountValue--
    }
    amount.innerText = amountValue;
}

function handleClick() {
    // let randomColor = getRandomColor();
    // heartShape.style.color = randomColor;
    

    
    heartShape.classList.toggle('clicked');
}

// function getRandomColor() {
//     let letters = '0123456789ABCDEF'
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]  
//     }
//     return color;
// }

function toggleCart() {
    cart.classList.toggle("invisible");
}

function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
        cartContent.classList.remove("empty");
        cartContent.innerHTML = `
         <div class="product">
                        <div>
                          <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="sneakers">
                          <div class="product-info">
                            <p class="product-title">Fall Limited Edition Sneakers</p>
                            <p><span>$125.00</span><span class="number">${amountValue}</span><b class="total">$${total}</b></p>
                          </div>
                          <button class="checkout-btn">Checkout</button>
                          
                        </div>
        `;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }
}

// function deleteItem() {
//     cartContent.classList.add("emptty");
//     cartContent.innerHTML = `<p> Your cart is empty</p>`;
//     indicator.style.display = "none";
// }


plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
cart.addEventListener("click", toggleCart);
cartBtn.addEventListener("click", toggleCart)
addBtn.addEventListener("click", addItem);


