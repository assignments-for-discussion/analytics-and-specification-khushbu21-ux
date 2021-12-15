const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

// If input is an array of only NaN, the average is NaN
it('reports the avarage as NaN on a list of NaN', ()=> {
  expect(average([ NaN, NaN ])).to.be.NaN;
})

it('return NaN as output if there is more than 50% missing values', () => {
  expect(average([NaN, 5, NaN])).to.be.NaN;
});

it('return NaN if there is a long sequence of NaN values', () => {
  expect(average([5, NaN, NaN, NaN, NaN, 2])).to.be.NaN;
});

it('return average if less than 50% NaN and no long sequences of NaN', () => {
  expect(average([1, NaN, NaN, 3, 2, 1, NaN, 1, 2, 1]))
      .to.be.approximately(1.4, 0.03);
});


it('test for NaN values at the end of the input', () => {
  expect(average([1, NaN, NaN, 3, 2, 5, 1, 1, NaN]))
      .to.be.approximately(1.4, 0.03);
});
