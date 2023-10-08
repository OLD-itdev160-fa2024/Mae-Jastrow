// welcome message
var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Atom reviews.';
var greetingEl = document.getElementById('greeting');

greeting.textContent = greeting;

// product price
Var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount), 
    priceEl = documen.getElementById('price'),
    studentPriceEl = document.getElementById('Student-price');

PriceEl.textContent = price.toFixed(2)
studentPriceEl.textContent = studentPrice.toFixed(2);