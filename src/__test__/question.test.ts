import { Question } from "../question";
import { Answers } from "../answers";

test('it should allow for a question to be created', () => {
    expect(new Question("Hello").text).toBe("Hello");
});

test('it should allow for a question to be answered as PITA', () => {
    let question = new Question("Hello");

    question.answer = Answers.PITA;

    expect(question.answer).toBe(Answers.PITA);
});

test('it should allow for a question to have options', () => {
    let question = new Question("Hello");

    question.addOption(Answers.VATA, "vata");
    question.addOption(Answers.PITA, "pita");
    question.addOption(Answers.KAPHA, "kapha");

    expect(question.options.get(Answers.VATA)).toBe('vata');
    expect(question.options.get(Answers.PITA)).toBe('pita');
    expect(question.options.get(Answers.KAPHA)).toBe('kapha');
});
