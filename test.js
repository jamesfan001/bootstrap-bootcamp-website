function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calculateDaysbetween(date1, date2) {
  var oneDay = 24 * 60 * 60 * 1000;
  var diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
  return diffDays;
}
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function daysBetweenDates(date1, date2) {
  var oneDay = 24 * 60 * 60 * 1000;
  var diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
  return diffDays;
}