let names = "Ralp";
let coffee = 5;
let bagel = 3;
let coffee1 = 5.99;
let bagel1 = 2.95;

total = coffee + bagel;
total1 = (coffee1 * 100 + bagel1 * 100) / 100;

// alert("My name is:" + " " + names);
// alert("Total cost:" + " " + "$" + total);
// alert(`Total cost: $${total}`);
alert("Total cost:" + " " + "$" + total1);
alert(`Total cost: $${total1}
Thank you, come again!`);

alert(`Items (${2 + 2}): $${(20.95 * 100 * 2 + 7.99 * 100 * 2) / 100}
Shipping & handling: $${4.99 + 4.99}
Total before tax: $${20.95 * 2 + 4.99 + 4.99 + 7.99 * 2} 
Estimated tax (10%): $${
  Math.round((2095 * 2 + 499 + 499 + 799 * 2) * 0.1) / 100
}
Order total: $${
  20.95 * 2 +
  4.99 +
  4.99 +
  7.99 * 2 +
  Math.round((2095 * 2 + 499 + 499 + 799 * 2) * 0.1) / 100
}
   `);
