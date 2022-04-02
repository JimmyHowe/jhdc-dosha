import { Answer } from "./answer";

interface Options {
    [Answer.VATA]: string
    [Answer.PITA]: string
    [Answer.KAPHA]: string
}

export class Question {
    constructor(text: string, options: Options) {
        this._text = text;
        this._options = options;
    }

    private _options: Options;

    get options(): Options {
        return this._options;
    }

    set options(value: Options) {
        this._options = value;
    }

    private _text: string;

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    private _answer!: Answer;

    get answer(): Answer {
        return this._answer;
    }

    set answer(value: Answer) {
        this._answer = value;
    }

    addOption(answer: Answer, message: string) {

        this._options[answer] = message;

        return this;
    }

    withOptions(options: Options) {
        this.options = options;

        return this;
    }
}
