import {Question} from "../question";
import { Answers } from "../answers";

test('it should allow for a question to be created', () => {
  expect(new Question("Hello").text).toBe("Hello");
});

test('it should allow for a question to be answered as PITA', () => {
  let question = new Question("Hello");

  question.answer = Answers.PITA;

  expect(question.answer).toBe(Answers.PITA);
});
