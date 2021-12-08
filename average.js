function average(numbers) {
  return numbers.reduce((p, c)=> p + c) / numbers.length;
}

module.exports = {average};
