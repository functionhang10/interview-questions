/**
 *  Compare first and second element, swap
 *  At the end of each iteration, the largest number is to the right
 * 
 *  Outer Loop = Iterate thru ALL the elements
 *    Inner Loop = Iterator thru ALL, except the LAST one
 * 
 *  Time Complexity : O(n^)
 */

const unsorted = [ 3, 9, 1, 100, 22, 8, 31, 23 ];

const bubbleSort1 = (arr) => {
  for (i=0; i < arr.length; i++) {
    // after each iteration, the last item is largest... so exclude that from sort
    for (j=0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
    console.log(`run = ${i} arr ${arr}`);
  }
}

bubbleSort1(unsorted);
console.log(`\n Final Sorted 1 = ${unsorted}`);

const bubbleSort2 = (arr) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    let end = arr.length - 1;
    for (let i=0; i < end; i++) {
      if (arr[i] > arr[i+1]) {
        swapped = true;
        const lesser = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = lesser;
      }
    }
    end--;
  }
}

bubbleSort2(unsorted);
console.log(`\n Final Sorted 2 = ${unsorted}`);

