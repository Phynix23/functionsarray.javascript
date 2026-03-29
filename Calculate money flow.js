function calculateMoneyFlow() {
    const transactions = [200, -150, 500, -80, 300, -420, 1000];
    let moneyIn = 0;
    let moneyOut = 0;
    
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i] > 0) {
            moneyIn += transactions[i];
        } else {
            moneyOut += transactions[i];
        }
    }
    
    const balance = moneyIn + moneyOut;
    
    console.log("Money In:", moneyIn);
    console.log("Money Out:", moneyOut);
    console.log("Balance:", balance);
    
    return { moneyIn, moneyOut, balance };
}
calculateMoneyFlow();