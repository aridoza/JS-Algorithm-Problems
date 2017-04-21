// Merge two sorted arrays
// Q: How would you merge two sorted arrays?
// Ex: arr1 = [1,3,5,7] arr2 = [2,4,6,8]   -> arr3 = [1,2,3,4,5,6,7,8] Combined and sorted

// Me: first combine the 2 arrays together; then loop through that array and assign a variable, starting from 0;
// if the next number is greater than that variable, set the variable equal to that number, and insert it at the end of the array
// then return the sorted array

arraySorter = (arr1, arr2) => {
  let baseArray = arr1.concat(arr2);
  let nextVal = 0;
  let sortedArray = [];

  for (let i = 0; i < baseArray.length; i += 1) {

    if (baseArray[i] <= 0) {
      sortedArray[i].push(baseArray[i]);
    }
    if (baseArray[i] > nextVal){
      nextVal = baseArray[i];
      sortedArray.push(baseArray[i]);
    }
    if (baseArray[i] < nextVal) {
      for (let j = 0; j < sortedArray.length; j += 1) {
        if (nextVal < sortedArray[j]) {
          let index = j - 1;
          sortedArray.splice(index, 0, nextVal);
        }
      }
    }
  }
  return sortedArray;
}


// Instructor Solution:
mergeSortedArray = (a, b) => {
  let merged = [];
  let aElm = a[0];
  let bElm = b[0];
  let i = 1;
  let j = 1;

  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }

  // if aElm or bElm exist we will insert to merged array (will go inside while loop)
  // to insert: aElm exists and bElm doesn't exist
  // or both exist and aElm < bElm; this is the critical part of the example

  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm);
      aElm = a[i+=1];
    } else {
      merged.push(bElm);
      bElm = b[j+=1];
    }
  }
  return merged;
}
