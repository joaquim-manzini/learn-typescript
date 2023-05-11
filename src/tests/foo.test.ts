import { removeDupes, sum } from '../foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('basic removeDupes', () => {
  expect(removeDupes("insomniaiiiiii")).toBe("somnia");
});

