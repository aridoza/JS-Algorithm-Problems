// Time Conversion \\
/*
Q: Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
midnight = 00:00:00 on a 24-hour clock
noon = 12:00:00 on a 24-hour clock

ex:
input:
07:05:45PM

output:
19:05:45

output format:  convert and print the given time in 24-hour format, where 00 <= hh <= 23.
*/

// my solution:
// split at the colon into an array
// check if the last item ends in AM or PM to determine output time
// range is from 00:00:00 to 23:59:59
// if hour is less than 12 and the last item ends in PM, add 12 to the first number
// return the converted number

timeConversion = (time) => {
  let arr = time.split(':');
  console.log(arr);

  let hours = 00;
  let minutes = 00;
  let seconds = 00;

  if (arr[2].includes('PM') && arr[0] === "12") {
    hours = parseInt(arr[0]);
  } else if (arr[2].includes('PM')) {
    hours += 12;
    hours += parseInt(arr[0]);
  } else if (arr[2].includes('AM') && arr[0] === "12") {
    hours = 0;
  } else {
    hours = parseInt(arr[0]);
  }


  minutes += parseInt(arr[1]);
  seconds += parseInt(arr[2]);

  if (hours < 10) {
    hours = "0" + hours.toString();
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  return `${hours}:${minutes}:${seconds}`;

}

// Successfully Submitted
