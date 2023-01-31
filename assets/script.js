const currentDate = $("#current-date");
const timetableArea = $("#timeblocks-area");

const hourlySlots = $(".card-title");

// Get the Current Date and Display it
function getCurrentDate() {
  let dateNow = moment().format("dddd, MMMM Do: H:mm:ss");

  currentDate.text(dateNow);
  // setInterval(getCurrentDate, 1000);
}

getCurrentDate();

// Add hour to the cards
let t = {
  slotInterval: 60,
  startTime: "9:00",
  finishTime: "17:00",
};

//Format the time
let startTime = moment(t.startTime, "HH:mm");
let endTime = moment(t.finishTime, "HH:mm");

let allTimes = [];

// //Loop over the times - only pushes time with 60 minutes interval
// while (startTime < endTime) {
//   //Push times
//   allTimes.push(startTime.format("HH:mm"));
//   //Add interval of 60 minutes
//   startTime.add(t.slotInterval, "minutes");
// }
// console.log(allTimes);

// $(hourlySlots).each(function () {
//   let lastElement = allTimes.slice(-1);
//   $(this).text(lastElement);
// });
