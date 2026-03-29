function printLongDistances() {
    const distances = [5, 12, 3, 8, 20, 7];
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] >= 8) {
            console.log(distances[i]);
        }
    }
}
printLongDistances();