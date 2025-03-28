import { add, subtract, multiply, divide } from "./calculator";

test("add ten to five is fifteen", () => {
  // Arrange
  const a: number = 10;
  const b: number = 5;
  const expected: number = 15;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract fifteen from ten is five", () => {
  // Arrange
  const a: number = 15;
  const b: number = 10;
  const expected: number = 5;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply two with eight is sixteen", () => {
  //Arrange
  const a: number = 2;
  const b: number = 8;
  const expected: number = 16;

  //Act
  const actual: number = multiply(a, b);

  //Assert
  expect(actual).toBe(expected);
});

test("divide six by three is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 2;

  // Act
  const actual = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by zero throws an error", () => {
  // Arrange
  const a: number = 6;
  const b: number = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrow("Division durch 0 ist nicht erlaubt.");
});