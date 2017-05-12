// Migratory Birds \\
/*
Q: Given an array of n integers where each integer describes the type of a bird in the flock, find and print the type number of the most common
bird. If two or more types of birds are equally common, choose the type with the smallest ID number.

ids: 1,2,3,4,5
n birds

print number of most common bird type
if 2 or more types are equally common, print smallest ID
*/

// my solution:
// use local object to store number of appearances of each ID
// once done, get the most occurring value
// check if more than 1 value appears the most, then return the smallest of those
// need to store index of item that has highest occurrence
// ** each type is either 1,2,3,4,5 ONLY

migratoryBirds = (n,arr) => {
  let birdTypes = {};

  for (let i = 0; i < arr.length; i += 1) {

    if (!birdTypes[arr[i]]) {
      birdTypes[arr[i]] = 1;
    } else {
      birdTypes[arr[i]] += 1;
    }
  }

  let typeValues = Object.values(birdTypes);

  let max = Math.max(...typeValues);
  let theKey = 0;

  for (let key in birdTypes) {
    if (birdTypes[key] === max) {
      theKey = key;
      console.log(key);
    }
  }

}
// Error on hackerrank using Object.values; working otherwise;
