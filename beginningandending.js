function updateWallet() {
  const wallet = [500, 1000, 250, 750];
  wallet.push(2000);
  wallet.unshift(100);
  console.log(wallet);
  return wallet;
}
updateWallet();