let cart = [];

function addToCart(smoothie) {
    cart.push(smoothie);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    let totalPrice = 0;
    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItems.appendChild(listItem);
        totalPrice += 50; // Anta att varje smoothie kostar 50 SEK
    });
    
    document.getElementById('total-price').textContent = `Total: ${totalPrice} SEK`;
}
