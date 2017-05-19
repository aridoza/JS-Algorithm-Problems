// Counting Valleys \\
/*
Q: Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

n = total steps taken
each step is either uphill or downhill
hikes start and end at sea level

valley = non-empty sequence of consecutive steps below sea level, starting with a step down from sea level, end w/ step up to sea level

ex:
input:
8
UDDDUDUU

output:
1

steps layout:

_ /\
    \      _
     \    /
      \/\/
*/

// my solution:
// use local variable starting at 0
// want to get number of times that var goes below 0 and back up to 0 (sea level)

countingValleys = (n,str) => {
  let valleys = 0;
  let backToSea = 0;
  let steps = str.split('');

  steps.forEach((step) => {
    if (step === 'U') {
      valleys += 1;
      if (valleys === 0) {
        backToSea += 1;
      }
    } else if (step === 'D') {
      valleys -= 1
    }
  });

  return backToSea;
}

// Successfully Submitted!
