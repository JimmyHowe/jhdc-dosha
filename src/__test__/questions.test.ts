import { Question } from "../question";
import { Answers } from "../answers";
import { Questions } from "../questions";

test('it should allow for a question to be added to collection', () => {
    let questionOne = new Question("One");

    let questions = new Questions();

    questions.add(questionOne);

    expect(questions.first().text).toBe("One");
});

test('it should allow for two questions to be added to collection', () => {
    let questionOne = new Question("One");
    let questionTwo = new Question("Two");

    let questions = new Questions();

    questions.add(questionOne);
    questions.add(questionTwo);

    expect(questions.first().text).toBe("One");
    expect(questions.last().text).toBe("Two");
});

test('it should allow for questions to be received by number', () => {
    let questionOne = new Question("One");
    let questionTwo = new Question("Two");

    let questions = new Questions();

    questions.add(questionOne);
    questions.add(questionTwo);

    expect(questions.number(1).text).toBe("One");
    expect(questions.number(2).text).toBe("Two");
});
