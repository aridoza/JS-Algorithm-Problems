//Remove Duplicate
// Q: How would you remove duplicate members from an array?

duplicateRemover = (arr) => {
  let count = 0;
  // set variable equal to first item in the array
  let item = arr[count];

  while (count <= arr.length) {

    // loop through the array
    for (let i = 0; i < arr.length; i += 1) {
      let index = arr.indexOf(item);
      console.log(index);
      // compare that first item in the array against each item in the array
      if (arr[i + 1] === item) {
        arr.splice(index, item);
      }
    }
    count += 1;

  }
  return arr;
}


//Instructor solution
//A: Start a while loop and keep an object/associated array. If I find an element for the first time I will set its value as true
// (that will tell me the element is added once). If I find an element that already exists in the object, it will not be inserted
// into the return array

removeDuplicate = (arr) => {
  let exists = {};
  let outArr = [];
  let elm;

  for (let i = 0; i < arr.length; i += 1) {
    elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}
