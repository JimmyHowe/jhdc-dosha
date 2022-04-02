import { Collection } from "./collection";
import { Question } from "./question";
import { Questions } from "./questions";

export class Group {

    constructor(name: string, questions: Questions) {
        this._name = name;
        questions.items.forEach((question: Question) => {
            this.questions.add(question);
        })
    }

    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _questions: Collection<Question> = new Collection<Question>();

    get questions(): Collection<Question> {
        return this._questions;
    }

    set questions(value: Collection<Question>) {
        this._questions = value;
    }

}
