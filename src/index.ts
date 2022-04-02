import { Group } from "./group";

export class Dosha {
    groups: Group[] = [];

    defaults()
    {
        let physical = new Group("Physical Features");
        let physiological = new Group("Physical Features");
        let psychological = new Group("Physical Features");

        this.groups.push(physical);
        this.groups.push(physiological);
        this.groups.push(psychological);
    }
}
