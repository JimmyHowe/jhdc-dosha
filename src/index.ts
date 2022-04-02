import { Questions } from "./questions";

export class Dosha {
	get groups(): Map<string, Questions> {
		return this._groups;
	}

	set groups(value: Map<string, Questions>) {
		this._groups = value;
	}

	private _groups: Map<string, Questions>;
}
