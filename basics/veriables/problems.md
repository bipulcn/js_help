<!-- this is will collect information related with problem based learning -->
const cartTotal = 50.00;
const discount = 10.00;
cartTotal = cartTotal - discount; 
console.log("Final price:", cartTotal);

1. The Challenge: Ask your student why this code throws a TypeError, and how they should change the variable declarations so the discount applies correctly.



2. The Scenario: A previous developer left this code to calculate a worker's weekly pay, but the variables are impossible to decipher.

let x = 40;
const y = 25.50;
let z = x * y;
let a = true;

The Challenge: Have the student rewrite this code using descriptive, camelCase variable names that clearly explain the business logic (e.g., hours worked, hourly rate).


3. The Scenario: A game character is holding a Health Potion in their left hand and a Mana Potion in their right hand. The player presses a button to swap them, but right now, the logic destroys the Health Potion.

let leftHand = "Health Potion";
let rightHand = "Mana Potion";

// The flawed swap logic:
leftHand = rightHand;
rightHand = leftHand;

console.log("Left:", leftHand);   // Mana Potion
console.log("Right:", rightHand); // Mana Potion

The Challenge: Fix the logic so the items swap without losing data. (Hint for the student: Introduce a third, temporary variable like an "empty table").


4. The Scenario: A welcome message is supposed to be contained strictly within a secure login block, but it is leaking out to the rest of the application.

var isLoggedIn = true;

if (isLoggedIn) {
    var secretGreeting = "Welcome to the hidden dashboard!";
}

// This shouldn't be accessible here!
console.log(secretGreeting);

The Challenge: Ask the student to replace var with modern keywords (let or const). What happens to secretGreeting outside the if block, and how does this make the code safer?

Problem 3: The Silent Failure vs. The Loud Crash (Hoisting & TDZ)

The Scenario: A web application fetches pricing data. In Version 1, the code silently applied a 0% discount to all carts because a variable was undefined. In Version 2, the app crashed entirely, displaying a white screen, which alerted the developers to the bug immediately.

The Code:

JavaScript
// Version 1 (Silent Failure)
console.log("Discount applied:", discountRate);
var discountRate = 0.15;

// Version 2 (Loud Crash)
console.log("Discount applied:", newDiscountRate);
let newDiscountRate = 0.15;
The Challenge: Ask the student to explain the different behaviors between Version 1 and Version 2 when they run. Why is the "Loud Crash" in Version 2 actually considered better and safer for a software engineering team than the "Silent Failure" in Version 1? (Learning outcome: var is hoisted and initialized as undefined, leading to hidden logic bugs. let is hoisted but enters the Temporal Dead Zone, throwing a ReferenceError that forces developers to fix their code order).