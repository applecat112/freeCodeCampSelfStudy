function whatIsInAName(arr, source) {
  return arr.filter(obj => 
    Object.keys(source).every(key => 
      obj[key] === source[key]
    )
  )
}
