function netprofit(prices) {
  profit = -10000;
  let x = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      x = prices[j] - prices[i];
      if (x > profit) {
        profit = x;
      }
    }
  }
  return profit;
}

prices = [7, 1, 5, 3, 6, 4];
console.log(netprofit(prices));
