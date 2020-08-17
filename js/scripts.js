$(document).ready(function () {

let suits = ["spades", "clubs", "hearts", "diamonds"];
let cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

suits.forEach(function(suit) {
  cards.forEach(function(card) {
    $("#result").append("<li>"+card+" of "+suit+"</li>");
  });
});

});