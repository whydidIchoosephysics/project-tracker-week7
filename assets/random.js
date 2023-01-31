let startingHour = moment();

startingHour.set("hour", 9);
startingHour.set("minute", 00);
startingHour.set("second", 00);
console.log(startingHour.toString());

let moment1 = moment();

moment1.set("hour", 10);
moment1.set("minute", 18);
moment1.set("second", 30);
moment1.set("millisecond", 150);

console.log("moment1 is:", moment1.toString());
console.log("moment1 hour:", moment1.hour());
console.log("moment1 minute:", moment1.minute());
console.log("moment1 second:", moment1.second());
console.log("moment1 millisecond:", moment1.millisecond());
