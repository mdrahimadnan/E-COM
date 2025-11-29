// Products and their prices
const products = {
  "Classic Steel": 120,
  "Minimal Leather": 95,
  "Sport Chrono": 150,
  "Elegant Gold": 220
};

// Load cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get HTML elements
const cartItemsDiv = document.getElementById("cart-items");
const totalPriceP = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-button");

// Render cart items
function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceP.textContent = "Total: $0.00";
    checkoutButton.style.display = "none";
    return;
  }

  cart.forEach(item => {
    const price = products[item] || 0;
    total += price;

    const div = document.createElement("div"); 
    <div></div>
    div.className = "cart-item";
    div.innerHTML = `<strong>${item}</strong> - $${price.toFixed(2)}`;
    cartItemsDiv.appendChild(div);
  });

  totalPriceP.textContent = `Total: $${total.toFixed(2)}`;
  checkoutButton.style.display = "inline-block";
}

// Checkout
checkoutButton.addEventListener("click", () => {
  alert("Checkout successful!");
  localStorage.removeItem("cart");
  cart.length = 0; // Clear array too
  renderCart();
});


// Load cart when page opens
renderCart();
