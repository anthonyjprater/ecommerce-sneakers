const menuOpenBtn = document.getElementById("icon-container");
const menuCloseBtn = document.getElementById("exit-mobile-menu");
const mobileMenu = document.querySelector('.mobile-menu')
const cartValueEl = document.getElementById('cart-value')
const addCart = document.querySelector('.add-quanity')
const subtractCart = document.querySelector('.subtract-quanity')
let cartValue = 0

menuOpenBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("isOpen");
});
  
menuCloseBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("isOpen");
});

addCart.addEventListener('click', addCartValue)

subtractCart.addEventListener('click', subtractCartValue)


function addCartValue(){
    cartValue++
    renderCartValue()
}

function subtractCartValue(){
    if (cartValue <= 0) {
        cartValue = 0
    } else if (cartValue > 0) {
        cartValue--
    }
    renderCartValue()
}

function renderCartValue(){
    cartValueEl.textContent = `${cartValue}`
}