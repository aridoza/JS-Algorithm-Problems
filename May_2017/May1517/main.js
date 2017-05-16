// Bon Appetit \\
/*
Q: Given n, k, the cost of each of the n items, and the total amount of money that Brian charged Anna for her portion of the bill.
If the bill is fairly split, print 'Bon Appetit'; otherwise, print the amount of money that Brian must refund to Anna.

they order n items
Anna declines to eat any of the kth item (0 <= k < n)
Brian may have forgotten to tell them to split kth item from Anna's part of bill

ex:
input:
4 1 (n: # items ordered, k: 0-based index of the item that Anna did not eat)
3 10 2 9 (cost of each item)
12 (how much Brian charged Anna for her share of the bill)

output:
5 (either Bon Appetit or the difference of what he charged vs what she should have paid)

*/

// my solution:
// have to get each time:
// Anna's actual total
// use conditional: if the difference btwn Anna's actual total and the charged amount === 0, print 'Bon Appetit';
// otherwise, print the difference between the two

bonAppetit = (n,k,arr,c) => {
  let charged = c;

  let annaArr = arr;
  annaArr.splice(k, 1);

  let annaTotal = 0;

  annaArr.forEach((item) => {
    annaTotal += item;
  });

  annaTotal = annaTotal / 2;

  if (annaTotal === c) {
    console.log('Bon Appetit');
    return;
  } else {
    console.log(c - annaTotal);
    return;
  }

}
