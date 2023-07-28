function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const left = mergeSort(array.slice(0, array.length / 2));
    const right = mergeSort(array.slice(array.length / 2));

    let i = 0;
    let j = 0;
    let mergedArray = [];

    while (i < left.length || j < right.length) {
      if (i === left.length) {
        let remaining = right.slice(j);
        mergedArray = mergedArray.concat(remaining);
        j = right.length;
      } else if (j === right.length) {
        let remaining = left.slice(i);
        mergedArray = mergedArray.concat(remaining);
        i = left.length;
      } else if (left[i] < right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else if (right[j] < left[i]) {
        mergedArray.push(right[j]);
        j++;
      } else if (left[i] == right[j]) {
        mergedArray.push(left[i]);
        mergedArray.push(right[j]);
        i++;
        j++;
      }
    }

    return mergedArray;
  }
}

mergeSort([71, 4, 80, 57, 0, 5, 7, 13, 9, 58, 2]);
