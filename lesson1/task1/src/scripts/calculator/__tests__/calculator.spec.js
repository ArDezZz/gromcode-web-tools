import { sum, mult } from '../calculator.js';

it('should be a sum', () => {
  expect(11).toEqual(sum(5, 6));
});

it('should be a mult', () => {
  expect(30).toEqual(mult(5, 6));
});
//something
