function BubbleSort(arr: number[], n: number) {
  let swapped;
  let i, j, temp;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped === false) break;
  }

  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];

console.log(arr);
console.log(BubbleSort(arr, arr.length));
