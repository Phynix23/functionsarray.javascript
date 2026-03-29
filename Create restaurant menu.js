function printRestaurantMenu() {
    const menu = ["jollof rice", "fried rice", "egusi soup", "pepper soup", "puff puff"];
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i]}`);
    }
}
printRestaurantMenu();