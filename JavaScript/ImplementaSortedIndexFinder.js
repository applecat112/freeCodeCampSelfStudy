function getIndexToIns(arr, num) {
  // Sort the array in ascending order.
  arr.sort((a, b) => a - b);

  // Find first index that value >= num
  const index = arr.findIndex(item => item >= num);

  // If not found, insert at the end of the array
  return index === -1 ? arr.length : index;
}
