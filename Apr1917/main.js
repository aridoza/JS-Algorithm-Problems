// Island Perimeter
// Q: you are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island
// (ex: one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around
// the island).  One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter
// of the island.
/*
ex: [
[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]
]
Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image
*/

// my solution:
// 0 = water, 1 = land;
// have to check what surrounds each index value horizontally & vertically to determine the number of sides
// may need to use recursion, may work similar to fibonacci where you end up adding all the sides individually at the end

islandPerimeter = (arr) => {
  let perimeter = 0;
  let land = 1;
  let water = 0;
  console.log(arr.length);
  for (let i = 0; i < arr.length; i += 1) {
    let currentArr = arr[i];
    let count = 0;

    while (count < currentArr.length) {
      if (i === 0 && currentArr[land].count === 1) {
        perimeter += 3;
      } else if (land === currentArr[count]){
        perimeter += 1;
      }
      count += 1;
    }
  }
  console.log(perimeter);
}

// User Solution:
// if the cell is an island, calculate its surrounding neighbor
// if its top neighbor is an island, the perimeter should minus 1

islandPerimeter2 = (grid) => {
  if (!grid || grid.length <= 0) {
    return 0;
  }

  let perimeter = 0;
  let colMax = grid[0].length;
  let rowMax = grid.length;
  for (let i = 0; i < rowMax; i += 1) {
    for (let j = 0; j < colMax; j += 1) {
      let item = grid[i][j];
      if (item === 0) {
        continue;
      } else if (item === 1) {
        let total = 4;
        //top
        if (hasCell(i - 1, j, grid)) {
          total -= 1;
        }
        // left
        if (hasCell(i, j - 1, grid)) {
          total -= 1;
        }
        //bottom
        if (hasCell(i + 1, j, grid)) {
          total -= 1;
        }
        // right
        if (hasCell(i, j + 1, grid)) {
          total -= 1;
        }

        perimeter += total;
      }
    }
  }
  return perimeter;
};

hasCell = (row, col, grid) => {
  if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
    if (grid[row][col] === 1) {
      return true;
    }
  }
  return false;
}

// my interpretation:
// user first adds 4 for each piece of land (represented by '1')
// then goes through each row and column using a separate function, if there's land there it subtracts 1 from the total
