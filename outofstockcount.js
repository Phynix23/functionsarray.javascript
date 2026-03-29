function countOutOfStock() {
    const stock = [10, 0, 5, 0, 8, 0, 3];
    let outOfStockCount = 0;
    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            outOfStockCount++;
        }
    }
    console.log("Items out of stock:", outOfStockCount);
    return outOfStockCount;
}
countOutOfStock();