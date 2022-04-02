import { Collection } from "./collection";
import { Question } from "./question";

export class Group {

    constructor(name: string, questions: string[] = []) {
        this._name = name;
        questions.forEach((question: string) => {
            this.questions.add(new Question(question));
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
