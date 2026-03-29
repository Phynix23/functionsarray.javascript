function addToCart() {
    const cart = ["shirt", "shoes", "hat"];
    cart.push("belt", "watch");
    console.log("Total items in cart:", cart.length);
    console.log("Cart contents:", cart);
    return cart;
}
addToCart();