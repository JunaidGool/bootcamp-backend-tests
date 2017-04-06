module.exports = function countAllFromTown (reg){
  var fromStellies = [];
  var splitRegs = reg.split(",");
  for (var i=0; i<splitRegs.length;i++){
    if (splitRegs[i].startsWith("CL")){
      fromStellies.push(splitRegs[i]);
    }
  }
  return fromStellies.length;
};
