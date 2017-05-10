// Birthday Chocolate \\
/*
Q: How many different ways can Lily break off a piece of chocolate to give to Ron?

input:
n = # of squares in the chocolate bar
(numbers written on each consecutive square of chocolate)
d (Ron's Birth day) m (Ron's birth month)

output:
print an integer denoting the total number of ways Lily can give a piece of chocolate to Ron

ex:
5
1 2 1 3 2
3 2

output:
2

Lily only wants to share with Ron if it contains m consecutive squares whose integers sum to d
so: m consecutive items that add up to d
*/

// my solution:
// loop through array of integers, using m to add each set of ints together until they equal d

birthdayChocolate = (n, arr, d, m) => {
  let total = d;

  if (m > arr.length) {
    console.log(0);
    return;
  }

  for (let i = 0; i < arr.length; i += 1) {
    console.log(Array.addRange(i, m));
  }
}


// User solution:
// hackerrank name: pragatirithekar
function getWays(squares, d, m){
  var ways = 0,
      i = 0,
      sum = 0,
      j = 0,
      index = 0;
    if(squares.length === 1 && squares[0] === d){
      return 1;
    }
    for(i = 0; i < squares.length - (m -1); i++){
      sum = 0;
      index = i;
      for(j = 0; j < m; j++){
        sum += squares[index++]
      }
      if(sum === d){
        ways++;
      }
    }
    return ways;
}
