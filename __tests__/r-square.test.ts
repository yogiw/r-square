import { rSquare } from '../src';

test('Should return r square correctly when input array is equal', () => {
  const x = [1, 2, 3, 4, 5, 6, 7];
  const y = [1, 2, 3, 3, 4, 6, 7];

  expect(rSquare(x, y)).toBe(0.94921875);
});

test('Should return r square correctly when x array is longer than y', () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const y = [1, 2, 3, 3, 4, 6, 7];

  expect(rSquare(x, y)).toBe(0.94921875);
});

test('Should return r square correctly when y array is longer than x', () => {
  const x = [1, 2, 3, 4, 5, 6, 7];
  const y = [1, 2, 3, 3, 4, 6, 7, 8, 9, 10];

  expect(rSquare(x, y)).toBe(0.94921875);
});
