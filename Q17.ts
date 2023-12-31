// Question 17:Seeing the world
const places = ["Tokyo", "Paris", "London", "Rome", "New York"];

console.log("The original order of the array:");
console.log(places);

console.log("\nPrinting the array in alphabetical order without modifying the actual list:");
console.log(places.sort());

console.log("\nShowing that the array is still in its original order:");
console.log(places);

console.log("\nPrinting the array in reverse alphabetical order without changing the order of the original list:");
console.log(places.sort((a, b) => b.localeCompare(a)));

console.log("\nShowing that the array is still in its original order:");
console.log(places);

console.log("\nReversing the order of the list:");
places.reverse();
console.log(places);

console.log("\nReversing the order of the list again:");
places.reverse();
console.log(places);

console.log("\nSorting the array so it’s stored in alphabetical order:");
places.sort();
console.log(places);

console.log("\nSorting to change your array so it’s stored in reverse alphabetical order:");
places.sort((a, b) => b.localeCompare(a));
console.log(places);