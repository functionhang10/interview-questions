const selection = (arr) => {
  const len = arr.length;
  for (let i=0; i < len; i++) {
    let indexOfMin = i;

    for (let j=i+1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      [ arr[i], arr[indexOfMin] ] = [ arr[indexOfMin], arr[i] ];
    }
  }
  return arr;
}

module.exports = selection;