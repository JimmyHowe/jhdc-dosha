import { Questions } from "../questions";
import { Group } from "../group";
import { Answer } from "../answer";
import { getTestQuestion } from "./getTestQuestion";

test('it should allow for a group to be created with a name', () => {

    let group: Group = new Group("Physical Features");

    expect(group.name).toBe("Physical Features");
});

test('it should allow for a set of questions to be added to a group', () => {

    let group: Group = new Group("Physical Features");

    let questionOne = getTestQuestion('One');
    let questionTwo = getTestQuestion('Two');

    let questions = new Questions();

    questions.add(questionOne);
    questions.add(questionTwo);

    group.questions = questions;

    expect(group.name).toBe("Physical Features");
    expect(group.questions.count()).toEqual(2);
});

test('it should allow for a set of questions to be added to a group elegantly', () => {

    let questionOne = getTestQuestion("One")
        .addOption(Answer.PITA, "pita")
        .addOption(Answer.VATA, "vata")
        .addOption(Answer.KAPHA, 'kapha');

    let questionTwo = getTestQuestion("Two");

    let group: Group = new Group("Physical Features", [
        questionOne,
        questionTwo
    ]);

    expect(group.name).toBe("Physical Features");
    expect(group.questions.number(1).text).toBe("One")
    expect(group.questions.number(2).text).toBe("Two")
});
