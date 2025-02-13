class Nods<T> {
    val: T;
    pointer: Nods<T> | null;
    constructor(val:T) {
        this.pointer = null;
        this.val = val;
    }
}

class QueueLinkedList<T> {
    private front: Nods<T> | null;
    private rear: Nods<T> | null;
    private size: number;

    constructor() {
        this.front = null;
        this.rear = null;
        this.size= 0;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    enqueue(val:T):void {
        const _Node = new Nods(val)
        if(this.isEmpty()) {
            this.front = _Node;
            this.rear = _Node;
        } else {
            if(this.rear) this.rear.pointer = _Node;
            this.rear = _Node
        }
        this.size++;
    }

    dequeue():string | T {
        if(!this.front) return `Queue is Empty`
        const deleted_val = this.front?.val;
        this.front = this.front?.pointer;
        this.size--;
        if(this.isEmpty()) this.rear = this.front = null;
        return deleted_val;
    }
}

