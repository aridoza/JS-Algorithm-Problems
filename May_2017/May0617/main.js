// Maximal Tourism \\
/*
Q: Given a map of the country, find the maximum number of connected cities [Jason] can visit?

A country has n cities numbered 1 to n and m bidirectional bus routes for traveling between cities. A pair of cities may be connected
by multiple bus routes, and one or mre bus routes may connect a city to itself.

For example, n = 8 cities, m = 7 bus routes given by the pairs (4,4), (2,3), (2,3), (2,5), (2,7), (5,7), (6,8).

Notes:
If a number is not included in the bus routes, means it has no bus routes (ex: 1 in above example has no bus routes).
Want to start at one city then travel to as many connected sities as possible by bus.
Print out the maximum number of cities the person can visit (highest number of connected cities).
If a city connects to a city already visited in the chain, ignore it (no diplicate trips);


Input:
ex:
8 5 -> n m (btwn 1 and 10^5)
1 2 -> bus route connecting cities (continued...) (all <= n)
7 4
7 3
5 8
1 3

Output:
5
*/

// my solution:
// first, figure out links between numbers
// next, remove cities with no connections (or if they all have no connections, return the first city)
// create an empty object to store route matches
// loop through input coordinates, and take each pair (and its reverse) and mark as true in the local object
// now with object of route pairings, need to find the longest connecting set of numbers
// can check for each number if another route pair includes that number, if it does add that to an array, continue on with that number (city)
// may best be solved with recursion



maximumTourism = (arr) => {
  // Take 2: try double for loop with recursion
  // making some progress; need to figure out where to
  // maybe try again by first looking for most appearing number (mode), or find the amt of occurrences for each number, then rule out
  // the ones that appear once;
  // also the one that appears most,

  // try 3: loop through array, assign local variable to each item in array item (ex: start with arr[i][0]);
  // now loop through rest of array, if that number is found, add it to a new local array, then:
  // remove that number from that next pair of numbers, and make the local variable equal to the OTHER remaining number in that pair
  // and keep going through the array;

  // in the end, want to have a series of local arrays, and return the one that is the longest

  let connections = {};
  let routeList = [];

  for (let i = 1; i < arr.length; i += 1) {
    // let route = arr[i];
    routeList.push(arr[i]);
    connections[arr[i]] = true;
    connections[arr[i].reverse()] = true;
    // console.log(route);
  }

  let longestRoute = [];

  if (arr.length <= 1) {
    return longestRoute;
  }

  for (let i = 1; i < arr.length; i += 1) {
    let route = arr[i];
    let route0 = arr[i][0];
    let route1 = arr[i][1];

    for (let j = 1; j < arr.length; j += 1) {
      let linkedRoute = arr[j];
      if (route === linkedRoute || route === linkedRoute.reverse()) {
        continue;
      } else if ( linkedRoute.includes(route0) ) {
        longestRoute.push(route0);
        arr.splice(route0, 1);
        console.log(longestRoute);
        return maximumTourism(arr);
      } else if ( linkedRoute.includes(route1) ) {
        longestRoute.push(route1);
        arr.splice(route0, 1);
        console.log(longestRoute);
        return maximumTourism(arr);
      }

    }
  }


  // Take 1: stuck on where to go with object, how to look for connections between pairs
  // let m = arr[0][1];
  // let connections = {};
  //
  // for (let i = 1; i < arr.length; i += 1) {
  //   // let route = arr[i];
  //   connections[arr[i]] = true;
  //   connections[arr[i].reverse()] = true;
  //   // console.log(route);
  // }
  //
  // console.log(connections);
  // let count = 1;
  // let routeChain = [];
  //
  // while (count < m) {
  //
  //
  //   count += 1;
  // }
}

maximumArray2 = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    

    let route[i] = [];
    route[i].push()
  }
}
