const currentDate = $("#current-date");
const timetableArea = $("#timeblocks-area");

const hourlySlots = $(".card-title");

// Get the Current Date and Display it
function getCurrentDate() {
  let dateNow = moment().format("dddd, MMMM Do: H:mm:ss");

  currentDate.text(dateNow);
  setInterval(getCurrentDate, 1000);
}

getCurrentDate();

// let allTimes = [];

// function createTimeSlots() {
//   // Add hour to the cards
//   let t = {
//     slotInterval: 60,
//     startTime: "9:00",
//     finishTime: "17:00",
//   };

//   //Format the time
//   let startTime = moment(t.startTime, "HH:mm");
//   let endTime = moment(t.finishTime, "HH:mm");

//   //Loop over the times - only pushes time with 60 minutes interval
//   while (startTime < endTime) {
//     //Push times
//     allTimes.push(startTime.format("HH:mm"));

//     //Add interval of 60 minutes
//     startTime.add(t.slotInterval, "minutes");
//   }

//   return allTimes;
// }

// createTimeSlots();
// console.log(allTimes);

// $(hourlySlots).each(function () {
//   let lastElement = allTimes.slice(-1);
//   $(this).text(lastElement);
// });

let Times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

for (hour in Times) {
  let lastElement = Times[hour];
  $(hourlySlots[hour]).text(lastElement);
}

let currentHour = moment().hour();
console.log(currentHour);

$(hourlySlots).each(function () {
  let currentTimeSlot = parseInt($(this).text().split(":")[0]);
  console.log(currentTimeSlot);

  let toDoText = localStorage.getItem(currentTimeSlot);
  $(this).siblings(".description").val(toDoText);

  if (currentTimeSlot < currentHour) {
    $(this).parent().parent().addClass("past");
  } else if (currentTimeSlot === currentHour) {
    $(this).parent().parent().removeClass("past");
    $(this).parent().parent().addClass("present");
  } else {
    $(this).parent().parent().removeClass("past present");
    $(this).parent().parent().addClass("future");
  }
});

$(".card-link").on("click", function () {
  let value = $(this).parent().siblings(".description").val().trim();
  console.log(value);

  let currentTimeSlot = parseInt(
    $(this).parent().siblings(".card-title").text().split(":")[0]
  );
  console.log(currentTimeSlot);
  localStorage.setItem(currentTimeSlot, value);
});
