import { Answers } from "./answers";

export class Question {

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    private _text: string;

    get answer(): Answers | boolean {
        return this._answer;
    }

    set answer(value: Answers | boolean) {
        this._answer = value;
    }

    private _answer: Answers | boolean;

    constructor(text: string, answer: Answers | boolean = false) {
        this._text = text;
        this._answer = answer;
    }
}
