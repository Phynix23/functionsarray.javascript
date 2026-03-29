function printPassFail() {
    const results = [55, 40, 72, 38, 91, 65, 48];
    for (let i = 0; i < results.length; i++) {
        const status = results[i] >= 50 ? "Pass" : "Fail";
        console.log(`${results[i]} - ${status}`);
    }
}
printPassFail();