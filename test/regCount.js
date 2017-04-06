module.exports = function countRegNumber(regSplit) {
  var regCountString  = 'CA 182736,CY 523519,CJ 812328';
  var regCount = regCountString.split(",");
  var regCountResult = regSplit.split(",").length;

  return regCountResult;

};
