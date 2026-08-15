export const SORTING_DATA = {
  category: "Sorting Algorithms",
  icon: "🔄",
  items: [
    {
      name: "Selection Sort",
      description: "Selection sort is a simple, in-place sorting algorithm. It works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. It maintains two subarrays: the subarray which is already sorted, and the remaining subarray which is unsorted.",
      image: "assets/dsa/selection_sort.svg",
      complexity: {
        time: "O(n²) in all cases",
        space: "O(1) auxiliary"
      },
      code: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap the found minimum element with the first element
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}`
    },
    {
      name: "Bubble Sort",
      description: "Bubble sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It is called bubble sort because smaller elements 'bubble' to the top of the list.",
      complexity: {
        time: "O(n²) worst and average, O(n) best",
        space: "O(1) auxiliary"
      },
      code: `function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Optimization: last element is already in place
  } while (swapped);
  return arr;
}`
    },
    {
      name: "Insertion Sort",
      description: "Insertion sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it performs well for small data sets or partially sorted arrays.",
      complexity: {
        time: "O(n²) worst and average, O(n) best",
        space: "O(1) auxiliary"
      },
      code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
    },
    {
      name: "Merge Sort",
      description: "Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves.",
      complexity: {
        time: "O(n log n) in all cases",
        space: "O(n) auxiliary"
      },
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
    },
    {
      name: "Quick Sort",
      description: "Quick Sort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways (first, last, random, median).",
      complexity: {
        time: "O(n log n) best/average, O(n²) worst",
        space: "O(log n) auxiliary stack space"
      },
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high]; // Choosing the last element as pivot
  let i = (low - 1); // Index of smaller element
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return (i + 1);
}`
    }
  ]
};
