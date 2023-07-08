// operations on Linked list: traversal, insertion, deletion, search

class LinkedNode {
    public next: LinkedNode | null;

    constructor(public element: string | number) {
        this.next = null;
    }
}

export class LinkedList {
    private head: LinkedNode | null = null;
    private tail: LinkedNode | null = null;
    private size = 0;

    constructor(values: (string | number)[] = []) {
        values.forEach(value => this.add(value))
    }

    public collect() {
        const collection = [];
        let current = this.head
        while(current) {
            collection.push(current.element)
            current = current.next;
        }
        return collection;
    }

    public getSize() {
        return this.size;
    }

    public add(element: string | number) {
        const node = new LinkedNode(element)
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size++;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.size++
    }

    public insertAt(idx: number, element: string | number) {
        const node = new LinkedNode(element);
        let currentIdx = 0;
        let current = this.head;
        let prev = current;
        if (idx === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            while(currentIdx < idx) {
                currentIdx++;
                prev = current;
                current = current.next;
            }
            prev.next = node;
            node.next = current;
        }
        this.size++;
    }

    public removeFrom(idx: number) {
        let currentIdx = 0;
        let current = this.head;
        let prev = current;

        if (idx === 0) {
            this.head = current.next;
        } else {
            while(currentIdx < idx) {
                currentIdx++;
                prev = current;
                current = current.next
            }
            prev.next = current.next
        }
        this.size--;
        return current.element
    }

    public indexOf(value: string | number) {
        let currentIdx = 0;
        let current = this.head;

        while(current) {
            if (current.element === value) return currentIdx
            current = current.next
            currentIdx++;
        }
        return null
    }
}
