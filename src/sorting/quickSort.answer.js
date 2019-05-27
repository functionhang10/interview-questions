// https://www.youtube.com/watch?v=0KBvaKc__rc

// n x logn - average
// n x logn - best
// n^2      - worst (when it's already sorted)

const quickSort1 = (arr) => {
  // base for recursion
  if (arr.length <= 1) return arr;

  // start pivot with the last element in the array
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i=0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i]);
  }

  console.log(`pivot [${pivot}] left [${left}] right [${right}]`);
  return [...quickSort1(left), pivot, ...quickSort1(right)];
}
console.log(quickSort1([3, 5, 6, 1, 10, 2, 6]));

const quickSort2 = (arr) => {
  // base for recursion
  if (arr.length <= 1) return arr;

  // start pivot with the first element
  const [ pivot, ...rest ] = arr;
  const left = [];
  const right = [];

  rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
  
  console.log(`pivot [${pivot}] left [${left}] right [${right}]`);
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}
// console.log(quickSort2([3, 5, 6, 1, 10, 2, 6]));


