// Cats and a Mouse \\
/*
Q: Two cats named A and B are standing at integral points on the x-axis. Cat A is standing at point x and cat B is standing at point y.
Both cats run at the same speed, and they want to catch a mouse named C that's hiding at integral point z on the x-axis.
Can you determine who will catch the mouse?

Given q queries in the form of x, y, and z. (cat A, cat B, mouse C).
if cat A catches the mouse first, print 'Cat A'
if cat B catches the mouse first, print 'Cat B'
if both cats reach the mouse at the same time, print 'Mouse C' as the 2 cats fight and the mouse escapes

ex:
input:
3
 1 2 3
 1 3 2
 2 1 3

output:
Cat B
Mouse C
Cat A
*/

// my solution:
// inputs will be in array of arrays; grab each respective value into a separate array (cat A, cat B, mouse C)
// now loop through each index in each array at once;
// check difference between each cat and the mouse;
// if one distance is lower, return that cat;
// if both distances are the same, return the mouse;
// use absolute value Math.abs

catsAndAMouse = (n, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let catA = arr[i][0];
    let catB = arr[i][1];
    let mouseC = arr[i][2];

    if (Math.abs(mouseC - catA) === Math.abs(mouseC - catB)) {
      console.log('Mouse C');
    } else if (Math.abs(mouseC - catA) < Math.abs(mouseC - catB)) {
      console.log('Cat A');
    } else if (Math.abs(mouseC - catA) > Math.abs(mouseC - catB)) {
      console.log('Cat B');
    }
  }
}

// Successfully submitted
