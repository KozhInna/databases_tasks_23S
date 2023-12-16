export function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < array.length; y++) {
      if (array[y] > array[y + 1]) {
        let change = array[y];
        array[y] = array[y + 1];
        array[y + 1] = change;
      }
    }
  }
  return array;
}
