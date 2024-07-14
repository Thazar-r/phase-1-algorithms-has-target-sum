function hasTargetSum(array, target) {
  // Write your algorithm here
   // Initialize a set to store seen values
   let seen = new Set();
    
   // Iterate through each element in the array
   for (let num of array) {
       // Calculate the complement needed to reach the target
       let complement = target - num;
       
       // Check if the complement exists in the set
       if (seen.has(complement)) {
           return true;
       }
       
       // Add the current number to the set
       seen.add(num);
   }
   
   // If no pair was found, return false
   return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n), 
  where n is the number of elements in the input array. 
  This is because we iterate through the array once (O(n) time complexity),
   and each set operation (checking if an element exists and adding an element) averages O(1) time complexity. 
   Therefore, the overall time complexity remains O(n).
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    // Initialize an empty set to store seen values
    seen = empty set
    
    // Iterate through each element in the array
    for num in array:
        // Calculate the complement needed to reach the target
        complement = target - num
        
        // Check if the complement exists in the set
        if complement in seen:
            return true
        
        // Add the current number to the set
        seen.add(num)
    
    // If no pair was found, return false
    return false
*/

/*
  Add written explanation of your solution here
  Initialization: We use a Set to efficiently store and check for numbers we've already seen as we iterate through the array.
Iteration: By iterating through each element once, we ensure that we check every possible pair (num and its complement) exactly once.
Set Operations: Checking if an element exists (seen.has(complement)) and adding an element (seen.add(num)) are average O(1) operations in a Set, ensuring that our solution remains efficient.
Return: If we find a pair that sums up to target, we immediately return true. If we exhaust the loop without finding such a pair, we return fals
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  // Additional test cases
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 7));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([], 10));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([5], 5));
}

module.exports = hasTargetSum;
