export class Collection<T> {
    items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    first(): T {
        return this.items[0];
    }

    last(): T {
        return this.items[this.items.length - 1]
    }

    number(number: number): T {
        return this.items[number - 1]
    }

    fill(items: T) {
        this.items.push(items);
    }

    count() {
        return this.items.length;
    }
}
