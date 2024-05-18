//Insertion sort is a basic sorting algorithm in which wach item in the final
//sorted array (or list) is sorted one at a time

function InsertionSort(arr: number[], n: number) {
  let i, j, key;

  for (i = 1; i <= n - 1; i++) {
    key = arr[i];
    j = i;
    while (arr[j - 1] > key && j >= 1) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = key;
  }

  return arr;
}

let numbers = [23, 11, 44, 87, 202, 1, 5];

console.log(InsertionSort(numbers, numbers.length));
