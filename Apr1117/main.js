// Leetcode: Single element in a sorted array
// Q: Given a sorted array consisting of only integers where every element appears twice except for one element which
// appears once. Find this single element that appears only once.
// ex: input: [1,1,2,3,3,4,4,8,8]   -> returns 2
// solution should run in O(log n) time and O(1) space

// my solution:
// loop through array from beginning to end;
// assign a variable to the first item, then check if it is equal to the next item in the array
// increase 'i' in the loop by 2 each time

// fix: what if array only has 3 items ex: [1,1,2]

singleItemFinder = (arr) => {
  let x = 0;

  for (let i = 0; i < arr.length; i += 2) {
    x = arr[i];
    if (x !== arr[i + 1] || arr[i + 1] === null) {
      return x;
    }
  }
}


// Poor Pigs
// There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same.
// If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket
// contains the poison within one hour.

// Follow-up: If there are 'n' buckets and a pig drinking poison will die within 'm' minutes, how many pigs (x) do you need to figure
// out the "poison" bucket within 'p' minutes? There is exactly one bucket with poison.

// my solution:
// 999 = water 1 = poison
// poisoned pig die time = 15min
// min amt of pigs needed to find poison within 60 min
// parameters: numberOfBuckets, timeToDeath, totalTime

// 1000 buckets, 1 pig per bucket = 1000 pigs
// 1 will die in 15 mins, 999 will survive
// 1000 more pigs come in, again 999 survive
// 2 more times to reach 60 mins - 4 will die, 3996 will live
// minimum could be 4 pigs if they all go to the poison bucket, but could actually be just 1 - if discovered at first attempt

// from code structure: buckets, minutesToDie, minutesToTest
// supposed to return '5' - 4 pigs for the 60 mins + 1 pig for the 15 mins

// minimumPigs = (numberOfBuckets, timeToDeath, totalTime) => {
//   let pigCount = 0;
//   let poisonBucket = Math.floor(Math.random() * numberOfBuckets);
//
//   while (pigCount < numberOfBuckets) {
//     if (pigCount === poisonBucket) {
//       return pigCount;
//     }
//     pigCount += 1;
//   }
// }

// Not working - see solution explanation for next practice session
poorPigs = (buckets, minsToDie, minsTotal) => {
  let pig = 15;
  return minsToDie + minsTotal / pig;
}
