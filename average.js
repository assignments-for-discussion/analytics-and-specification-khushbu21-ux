function average(numbers) {
  if(numbers === 0) return 0;
  else {
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  }
}

module.exports = {average};
