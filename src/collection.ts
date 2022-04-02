export class Collection<T> {
    _data: T[] = [];

    add(item: T) {
        this._data.push(item);
    }

    first(): T {
        return this._data[0];
    }

    last(): T {
        return this._data[this._data.length - 1]
    }

    number(number: number): T {
        return this._data[number - 1]
    }
}
