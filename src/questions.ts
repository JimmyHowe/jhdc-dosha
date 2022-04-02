import { Question } from "./question";

export class Questions {
    _questions: Question[] = [];

    add(question: Question) {
        this._questions.push(question);
    }

    first() {
        return this._questions[0];
    }

    last() {
        return this._questions[this._questions.length - 1]
    }

    number(number: number) {
        return this._questions[number - 1]
    }
}
