
const sum3InArray = (arr, target) => {
  const results = []; 
  
  // sort the array
  // [ -8, -6, 1, 2, 3, 5, 6, 12 ]
  arr = arr.sort( (a,b) => a > b)

  for (let i=0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        results.push([ arr[i], arr[left], arr[right] ]);

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }

    }
  }
  return results;
}

module.exports = sum3InArray;