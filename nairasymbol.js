function printExpenses() {
  const expenses = [1500, 3200, 800, 5000, 2200];
  for (let i = 0; i < expenses.length; i++) {
    console.log(`₦${expenses[i]}`);
  }
}
printExpenses();