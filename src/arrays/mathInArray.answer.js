const sumInArray = (arr, sum) => {
  const answer = [];
  const match = {};

  // arr = [7, 0, -4, 5, 2, 3];
  // match = { '3': 2, '5': 0, '9': -4, '-2': 7 }
  for (let i=0; i < arr.length; i++) {
    const value = arr[i];
    if (match[value] !== undefined) {
      answer.push( [match[value], value] );
    } else {
      // when value = 0, match = { 5 : 0 }
      // when value = 5, sum match is found ! ! ! 
      match[sum - value] = value;
    }
  }

  return answer;
}

const sum3InArray = (arr, target) => {
  const results = []; 
  
  // sort the array
  // [ -8, -6, 1, 2, 3, 5, 6, 12 ]
  arr = arr.sort( (a,b) => a > b)

  // ignore the last 2 elements
  for (let i=0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      console.log(`${arr[i]} + ${arr[left]} + ${arr[right]} = ${sum}`);

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