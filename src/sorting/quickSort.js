const quick = (arr) => {
  // base
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i=0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]); 
  }
  return [...quick(left), pivot, ...quick(right)];
}

module.exports = quick;