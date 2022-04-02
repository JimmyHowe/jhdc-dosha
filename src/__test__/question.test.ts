import { Answer } from "../answer";
import { getTestQuestion } from "./getTestQuestion";

test('it should allow for a question to be created', () => {

    let question = getTestQuestion();

    expect(question.text).toBe("Hello");
    expect(question.options[Answer.VATA]).toBe("vata");
    expect(question.options[Answer.PITA]).toBe("pita");
    expect(question.options[Answer.KAPHA]).toBe("kapha");
});

test('it should allow for a question to be answered as PITA', () => {

    let question = getTestQuestion();

    question.answer = Answer.PITA;

    expect(question.answer).toBe(Answer.PITA);
});
