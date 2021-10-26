export function getArraySum(array) {
  return array.reduce((total, element) => total + element, 0);
}

// Adapted from: https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/
export function areArraysEqual(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all items exist and are in the same order
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  // Otherwise, return true
  return true;
}
