import { Question } from "../question";
import { Answer } from "../answer";

export function getTestQuestion(text: string = 'Hello') {
    return new Question(text, {
        [Answer.VATA]: 'vata',
        [Answer.PITA]: 'pita',
        [Answer.KAPHA]: 'kapha',
    });
}
