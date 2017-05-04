// Kangaroo \\
/*
Q: There are 2 kangaroos on an x-axis ready to jump in the positive direction (toward positive infinity). The first kangaroo starts at location
x[1] and moves at a rate of v[1] meters per jump. The second kangaroo starts at location x[2] and moves at a rate of v[2] meters per jump.
Given the starting locations and the movement rates for each kangaroo, can you determine if they'll ever land at the same location at the
same time?

input:
Single line of four space-separated integers denoting the respective values of x[1], v[1], x[2] and v[2].

output:
print YES if they can land on the same location at the same time; otherwise, print NO.

NOTE: the two kangaroos must land at the same location after making the same number of jumps


*/

//my solution:
// want to look for the higher starting point, and see if the lower starting point can catch up;
// ex: if the second kangaroo starts ahead of the first and moves at a faster rate, then the first will never catch it
// 0 3 4 2 -> would work after 4 jumps

kangaroo = (x1, v1, x2, v2) => {
  let k1Start = x1;
  let k2Start = x2;
  let k1Speed = v1;
  let k2Speed = v2;

  let jumpCount = 1;

  if ( (k1Start <= k2Start && k1Speed < k2Speed) || (k2Start <= k1Start && k2Speed < k1Speed) ) {
    console.log('NO');
  } else {
    let k1Position = k1Start + k1Speed;
    let k2Position = k2Start + k2Speed;

    if (k1Position === k2Position) {
      console.log('YES');
    } else {

      while (jumpCount < k2Start) {
        k1Position += k1Speed;
        k2Position += k2Speed;
        if (k1Position === k2Position) {
          console.log('YES');
          break;
        }
        jumpCount += 1;
      }
    }

  }


}

// failing test: input: 2564 5393 5121 2836        expected output: YES;
// problem was not adding 'return;' if a final conslusion was made with a console.log, so it would break out of the program;

// Successfully Submitted!
