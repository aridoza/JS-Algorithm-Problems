// Drawing Book \\
/*
Q: Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

n = total pages in Book
p = specific page number to turn to

* account for page layout for page turns:
ex: always starts with page 1 on right side, each page has 2 sides (ex: page 2 or 3 from start are both only 1 page turn)

input:
6
2

output:
1 (starting from page 1, page 2 is just 1 page turn away)
*/

// my solution:
// first check if p is > or < 1/2 of n, to know which side is closer to start from (beginning or end)
// if it's exactly half, should be same number of page turns from front or back (but start from front - test)
// next, have to count starting from  page (1 or n) by 2 until you reach p - this should give the final answer
// also note if p <= 1/2 n - start from 1 and count up; if p > 1/2 n start from n and count down by 2
// bug: for odd-numbered n, even-numbered p, it goes back/forward an extra page

drawingBook = (n,p) => {
  let pageCount = 0;
  let startingPage = 0;

if ( n > 3 && p === n - 1 && n % 2 === 0) {
  return 1;
} else if (p === n || p === n - 1) {
    return 0;
}
  let halfMark = Math.floor(n / 2);
  console.log(halfMark);

  if (p > halfMark) {
    if (n % 2 === 0) {
      startingPage = n;
    } else {
      startingPage = n - 1;
    }

    for (let i = startingPage; i > p; i -= 2) {
      pageCount += 1;
    }
  } else {
    startingPage = 1;

    for (let i = 1; i < p; i += 2) {
      pageCount += 1;
    }
  }
  return pageCount;
}

// Successfully Submitted!
