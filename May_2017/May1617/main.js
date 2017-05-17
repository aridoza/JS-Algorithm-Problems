// Sock Merchant \\
/*
Q: Given n and the color of each sock, how many pairs of socks can John sell?
1 <= c[i] <= 100  (sock number)

ex:
input:
9
10 20 20 10 10 30 50 10 20

output:
3
*/

// my solution:
// use 2 loops, assign local variable to first arr item
// use second loop to find matches, and each time one is found, remove it from the array
// have to then also remove the first item from the array
// use local variable 'count' to keep track of number of pairs, increase by 1 each time a pair is found
// can use object to count how many of each number there are, then divide each amount by 2 and increase the pairs count by the result
// without the remainder

sockMerchant = (n, arr) => {
  let numsSet = {};

  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i];
    if (!numsSet[item]) {
      numsSet[item] = 1;
    } else {
      numsSet[item] += 1;
    }
  }

  let count = 0;
  let pairs = 0;

  for (let key in numsSet) {
    pairs = Math.floor(numsSet[key] / 2);
    count += pairs;
  }
  console.log(count);
}

// Successfully Submitted!
