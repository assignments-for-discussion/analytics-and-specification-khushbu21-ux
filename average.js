
function average(numbers) {
  var i = 0, sum = 0, len = numbers.length;
  while(i < len) {
    sum = sum + numbers[i++];
  }
  return sum / len;
}

module.exports = {average};
