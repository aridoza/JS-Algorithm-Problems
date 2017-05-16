// Day of the Programmer \\
/*
Q: Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then
print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

Notes:
1700 - 1917: Julian Calendar
1918: went from 1/31 to 2/14 (so 2/14 was the 32nd day of the year)
since 1919: Gregorian calendar

leap year = 29 days in Feb:
Julian - every 4 years
Gregorian - divisible by 400 OR divisible by 4 and not divisible by 100

ex:
y = 2017

output: 13.09.2017
*/

// my solution:
// need the 256th day of that year
// first check what kind of calendar year it is
// next figure out how many days february will have
// then all other moonths should be the same # of days
// final answer should either be: Sept 13, Sept 12, or Oct 11 (if it's 1918)
// error: (fixed) supposed to be Sept 26 if it's 1918 (added days wrong)


programmerDay = (y) => {
  let calendar;
  let february = 0;

  if (y >= 1919) {
    calendar = "gregorian";
  } else if (y <= 1917) {
    calendar = "julian";
  } else {
    calendar = "transition";
  }

  if (calendar === "gregorian") {
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0) ) {
      february = 29;
    } else {
      february = 28;
    }
  }

  if (calendar === "julian") {
    if (y % 4 === 0) {
      february = 29;
    } else {
      february = 28;
    }
  }

  if (calendar === "transition") {
    february = 14;
  }

  // adding days for jan - aug WITHOUT feb
  let daysStart = 215;

  // add in the days for february calculated above; this is jan - aug
  daysStart += february;

  let difference = 256 - daysStart;

  if (difference = 13) {
    console.log(`13.09.${y}`);
    return;
  } else if (difference = 12) {
    console.log(`12.09.${y}`);
    return;
  } else if (difference > 13) {
    console.log(`26.09.${y}`);
    return;
  }


}
// Successfully submitted!
