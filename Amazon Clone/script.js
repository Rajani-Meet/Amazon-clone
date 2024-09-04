let cart = [];
let cartCount = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${product} has been added to your cart.`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartContent = "Items in your cart:\n";
        let total = 0;
        let charge = 0;
        cart.forEach(item => {
            cartContent += `${item.product}: Rs.${item.price}\n`;
            total += item.price;
            charge +=50;
            
        });
        total += charge;
        cartContent +=`\nDelivery Charge : Rs.${charge}`;
        cartContent += `\nTotal: Rs.${total}`;
        alert(cartContent);
    }
}
const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {

  window.scrollTo({ top: 0, behavior: 'smooth' });
});
