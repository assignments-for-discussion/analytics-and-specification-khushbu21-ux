function filterOutliers(numbers) {
  var values = numbers.concat();

  values.sort((a, b) => a - b);

  var Quartile_1 = values[Math.floor(values.length / 4)];
  var Quartile_3 = values[Math.ceil(values.length * (3 / 4)) - 1];
  var interQuartileRange = Quartile_3 - Quartile_1;

  var maxValue = Quartile_3 + interQuartileRange * 1.5;
  var minValue = Quartile_1 - interQuartileRange * 1.5;

  var filteredValues = values.filter((x) => x <= maxValue && x >= minValue);

  return filteredValues;
}

function average(numbers) {
  if(numbers.length == 0) {
    return Nan;
  }
   
  const WithoutNan = numbers.filter((num) => !Number.isNaN(num));
  const WithoutOutliersAndNan = filterOutliers(WithoutNan);

  return (
    WithoutOutliersAndNan.reduce((p, c) => p + c, 0) / WithoutOutliersAndNan.length;

  );
}

module.exports = { average };
