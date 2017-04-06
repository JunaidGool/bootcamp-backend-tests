module.exports = function regCheck(regNum,location){
  var regPlt = regNum.endsWith(location);
  return regPlt;
};
