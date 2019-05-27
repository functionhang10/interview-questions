/**
 *  Divide into sorted (initially empty) and unsorted (initially full) arrays
 *  
 *  For each iteration, pick the smallest element from the unsorted and move to sorted
 * 
 *  Outer Loop = Iterate thru ALL the elements
 *    Inner Loop = Iterator thru ALL, except the FIRST one
 * 
 *  Time Complexity : O(n^)
 */

const unsorted = [ 3, 9, 1, 100, 22, 8, 31, 23 ];

const selectionSort = (arr) => {
  for (let i=0; i < arr.length; i++) {
    let indexOfSmallest = i;

    // find the index of the smallest element...
    for (let j=i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }

    // ...after finding the index of the smallest element, swap it (only if it's been changed)
    if (indexOfSmallest !== i) {
      // let lesser = arr[indexOfSmallest];
      // arr[indexOfSmallest] = arr[i];
      // arr[i] = lesser;

      // es6 destructoring...
      [ arr[indexOfSmallest], arr[i] ] = [ arr[i], arr[indexOfSmallest] ];
    }
    
    console.log(arr);
  }
}

selectionSort(unsorted);
console.log(unsorted);