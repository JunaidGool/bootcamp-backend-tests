function countAllPaarl(string) {
  var newArr = [];
  var countingThem = string.split(", ");
  for (var i=0;i<countingThem.length;i++){
    var count = countingThem[i];
    if (count.startsWith("CJ")){
      newArr.push(count);
    }
  }
  console.log(newArr.length);
  return newArr.length
};
