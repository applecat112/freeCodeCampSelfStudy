function steamrollArray(arr) {
  let res = [];
  function flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        flatten(item)
      } else {
        res.push(item)
      }
    }
  }
  flatten(arr);
  return res;
}

