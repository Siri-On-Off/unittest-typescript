import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Leere Liste: Durchschnittberechnung nicht moeglich.");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5, 7, 9];
  const expected: number = 4;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 9];
  const expected: number = 4.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Leere Liste: Medianberechnung nicht moeglich.");
});


test("median for odd number of elements with shuffled numbers", () => {
  // Arrange
  const numbers: number[] = [1, 5, 4, 2, 3, 9, 7]; // 1, 2, 3, [4], 5, 7, 9
  const expected: number = 4;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mode for single element", () => {
  // Arrange
  const numbers: number[] = [1];
  const expected: number[] = [1];
  
  // Act
  const actual: number[] = mode(numbers);
  
  // Assert
  expect(actual).toEqual(expected);
});

test("test mode for multiple occurrences", () => {
  // Arrange
  const numbers: number[] = [1, 1, 2, 2, 3];
  const expected: number[] = [1, 2];
  
  // Act
  const actual: number[] = mode(numbers);
  
  // Assert
  expect(actual).toEqual(expected);
});

test("standardDeviation from empty list", () => {
  // Arrange
  const numbers: number[] = [];
  
  // Act & Assert
  expect(() => standardDeviation(numbers)).toThrow("Standardabweichung ist für eine leere Liste nicht definiert.");
});

test("standardDeviation from one number", () => {
  // Arrange
  const numbers: number[] = [5];
  const expected: number = 0;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("standardDeviation from numbers one and three", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 1;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("SstandardDeviation from numbers one and five", () => {
  // Arrange
  const numbers: number[] = [1, 5];
  const expected: number = 2;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("standardDeviation from numbers one two three four five", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expectedMin: number = 1.41;
  const expectedMax: number = 1.42;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBeGreaterThan(expectedMin);
  expect(actual).toBeLessThan(expectedMax);
});