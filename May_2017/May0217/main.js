// Apple and Orange \\
/*
Q: Given the value of d for m apples and n oranges, can you determine how many apples and oranges will fall on Sam's house (i.e., in the
inclusive range [s,t])? Print the number of apples that fall on Sam's house as your first line of output, then print the number of
oranges that fall on Sam's house as your second line of output.

input:
s, t values (Sam's house)
a, b values (apple tree location, orange tree location)
m, n values (number of apples, number of oranges)
m values (the distances each apple fell from point a)
n values (the distances each orange fell from point b)

output:
Print 2 lines of output:
1. number of apples that fall on Sam's house
2. number of oranges that fall on Sam's house

ex:
input:
7 11
5 15
3 2
-2 2 1
5 -6

output:
1 apple
1 orange
*/

// my solution
// use range for Sam's house in conditional
// use each tree as base point for adding/subtracting each fruit that falls
// if a fruit that falls adds up to a number in the range of Sam's house, add it to a 'hit' array
// once the loop completes, print each item separately

appleOrange = (s, t, a, b, m, n, apples, oranges) => {
  let appleTree = a;
  let orangeTree = b;

  let houseStart = s;
  let houseEnd = t;

  let fallenApples = m
  let fallenOranges = n;

  let houseHitters = {'apples': 0, 'oranges': 0};

  apples.forEach(apple => {
    if (appleTree + apple >= houseStart && appleTree + apple <= houseEnd) {
      houseHitters['apples'] += 1;
    }
  });

  oranges.forEach(orange => {
    if (orangeTree + orange >= houseStart && orangeTree + orange <= houseEnd) {
      houseHitters['oranges'] += 1;
    }
  });
  console.log(houseHitters['apples']);
  console.log(houseHitters['oranges']);
}

// Submitted successfully!
