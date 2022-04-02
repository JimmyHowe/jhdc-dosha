import { Group } from "./group";
import { Questions } from "./questions";
import { Question } from "./question";
import { Answer } from "./answer";

export class Dosha {

    groups: Group[] = [];

    defaults() {

        this.groups.push(new Group("Physical Features", new Questions().fill([
            new Question('Body Height / Frame', {
                [Answer.VATA]: 'Extra / Tall',
                [Answer.PITA]: 'Average',
                [Answer.KAPHA]: 'Heavy set / stocky',
            }),
            new Question('Musculoskeletal features', {
                [Answer.VATA]: 'Bony, joints click',
                [Answer.PITA]: 'Well proportioned',
                [Answer.KAPHA]: 'Well formed',
            }),
            new Question('Body weight', {
                [Answer.VATA]: 'Light',
                [Answer.PITA]: 'Medium',
                [Answer.KAPHA]: 'Plump',
            }),
        ])));

        this.groups.push(new Group("Physiological Features", new Questions().fill([
            new Question('Body Height / Frame', {
                [Answer.VATA]: 'Extra / Tall',
                [Answer.PITA]: 'Average',
                [Answer.KAPHA]: 'Heavy set / stocky',
            }),
            new Question('Musculoskeletal features', {
                [Answer.VATA]: 'Bony, joints click',
                [Answer.PITA]: 'Well proportioned',
                [Answer.KAPHA]: 'Well formed',
            }),
            new Question('Body weight', {
                [Answer.VATA]: 'Light',
                [Answer.PITA]: 'Medium',
                [Answer.KAPHA]: 'Plump',
            }),
        ])));

        this.groups.push(new Group("Psychological Features", new Questions().fill([
            new Question('Body Height / Frame', {
                [Answer.VATA]: 'Extra / Tall',
                [Answer.PITA]: 'Average',
                [Answer.KAPHA]: 'Heavy set / stocky',
            }),
            new Question('Musculoskeletal features', {
                [Answer.VATA]: 'Bony, joints click',
                [Answer.PITA]: 'Well proportioned',
                [Answer.KAPHA]: 'Well formed',
            }),
            new Question('Body weight', {
                [Answer.VATA]: 'Light',
                [Answer.PITA]: 'Medium',
                [Answer.KAPHA]: 'Plump',
            }),
        ])));
    }
}
