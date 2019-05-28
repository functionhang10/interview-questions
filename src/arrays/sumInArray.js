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
      match[sum - value] = value;
    }
  }

  return answer;
}


module.exports = sumInArray;