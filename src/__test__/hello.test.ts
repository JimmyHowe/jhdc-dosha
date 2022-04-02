import { Hello } from "../index";

test('adds 1 + 2 to equal 3', () => {
  expect(new Hello().say()).toBe("Hello");
});
