function diffArray(arr1, arr2) {
  //arr1.filter(item => !arr2.includes(item)) -> Get the elements present in arr1 but not in arr2.
  //arr2.filter(item => !arr1.includes(item)) -> Get the elements present in arr2 but not in arr1.
  return arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)))
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))

//[ 'pen', 'pencil', 'notebook' ]
