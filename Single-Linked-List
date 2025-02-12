class Node<T> {
    val: T;
    pointer: Node<T> | null;

    constructor(val: T) {
        this.val = val;
        this.pointer = null;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    isEmpty(): boolean {
        return this.length === 0;
    }

    size(): number {
        return this.length;
    }

    append(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail!.pointer = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.pointer = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insertAt(index: number, value: T): void {
        if (index < 0 || index > this.length) throw new Error("Invalid index");

        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }

        let prev = this.getNodeAt(index - 1);
        const newNode = new Node(value);
        newNode.pointer = prev!.pointer;
        prev!.pointer = newNode;
        this.length++;
    }

    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.val === value) {
            this.head = this.head.pointer;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current.pointer && current.pointer.val !== value) {
            current = current.pointer;
        }

        if (current.pointer) {
            current.pointer = current.pointer.pointer;
            this.length--;
            return true;
        }
        return false;
    }

    removeAt(index: number): T | null {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) {
            let val = this.head!.val;
            this.head = this.head!.pointer;
            this.length--;
            return val;
        }

        let prev = this.getNodeAt(index - 1);
        let removedNode = prev!.pointer!;
        prev!.pointer = removedNode.pointer;

        if (removedNode === this.tail) this.tail = prev;

        this.length--;
        return removedNode.val;
    }

    findByValue(value: T): number {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.val === value) return index;
            current = current.pointer;
            index++;
        }
        return -1;
    }

    findByIndex(index: number): T | null {
        let node = this.getNodeAt(index);
        return node ? node.val : null;
    }

    reverse(): void {
        let prev = null;
        let current = this.head;
        this.tail = this.head;

        while (current) {
            let next = current.pointer;
            current.pointer = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    toArray(): T[] {
        let arr: T[] = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.pointer;
        }
        return arr;
    }

    print(): void {
        console.log(this.toArray().join(" -> "));
    }

    clear(): void {
        this.head = this.tail = null;
        this.length = 0;
    }

    getHead(): T | null {
        return this.head ? this.head.val : null;
    }

    getTail(): T | null {
        return this.tail ? this.tail.val : null;
    }

    private getNodeAt(index: number): Node<T> | null {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let count = 0;
        while (current && count < index) {
            current = current.pointer;
            count++;
        }
        return current;
    }
}
