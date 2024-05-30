import { describe, expect, test } from "@jest/globals";
import middleNumber from "./middle-number";

describe("middle number algorithm test", () => {
  test('in the list "40, 33, 55, 10, 44, 90" middle or nearest number to equal 44', () => {
    const input = [40, 33, 55, 10, 44, 90];

    expect(middleNumber(input)).toBe(44);
  });

  test('in the list "165, 64, 130, 91, 3" middle or nearest number to equal 91', () => {
    const input = [165, 64, 130, 91, 3];

    expect(middleNumber(input)).toBe(91);
  });

  test('in the list "165, 96, 191, 134, 117" middle or nearest number to equal 96', () => {
    const input = [165, 96, 191, 134, 117];

    expect(middleNumber(input)).toBe(96);
  });

  test('in the list "40, 45, 33, 55, 10, 44, 90" middle or nearest number to equal 45', () => {
    const input = [40, 45, 33, 55, 10, 44, 90];

    expect(middleNumber(input)).toBe(45);
  });
});
