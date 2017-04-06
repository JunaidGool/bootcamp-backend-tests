module.exports = function isWeekday(day){
  var result = day.startsWith("Monday","Tuesday","Wednesday","Thursday","Friday");
  return result;
};
