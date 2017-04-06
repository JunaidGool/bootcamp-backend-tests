module.exports = function yearsAgo(yearParam){
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var yearDiff = currentYear - yearParam;
  return yearDiff;
};
