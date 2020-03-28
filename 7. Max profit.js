const prices = [128, 97, 121, 123, 98, 97, 105]

maxProfit = (prices) => {

  let max = prices[1] - prices[0];

  for (let i = 0; i < prices.length -1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let diff = prices[j] - prices[i]
      if (diff > max) {
        max = diff;
      }
    }
  }

  return `Max profit per share: $${max}`
}

console.log(maxProfit(prices));