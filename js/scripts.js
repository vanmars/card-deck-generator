$(document).ready(function () {
  let suits = ["spades", "clubs", "hearts", "diamonds"];
  let cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      $("#result").append("<li>"+card+" of "+suit+"</li>");
    });
  });

  // Practice with Filter Method
  const result = suits.filter(suit => suit.length > 5);
  // console.log(result);

  // Practice with Reduce Method
  var numbers = [53, 88, 39];
  var sum = numbers.reduce(function(total, amount) {
    // console.log(total);
    return total+amount;
  })
  // console.log(sum);
});