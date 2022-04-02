import { Answers } from "./answers";

export class Question {

    options: Map<Answers, string> = new Map<Answers, string>()

    constructor(text: string, answer: Answers | boolean = false) {
        this._text = text;
        this._answer = answer;
    }

    private _text: string;

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    private _answer: Answers | boolean;

    get answer(): Answers | boolean {
        return this._answer;
    }

    set answer(value: Answers | boolean) {
        this._answer = value;
    }

    addOption(answer: Answers, message: string) {
        this.options.set(answer, message);
    }
}
