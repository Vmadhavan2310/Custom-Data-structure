class Nods<T> {
    val: T;
    pointer: Nods<T> | null
    constructor(val:T) {
        this.val = val;
        this.pointer = null
    }
}

class LinkedListStack<T> {
    private top: Nods<T> | null;
    private size: number;
    constructor() {
        this.top = null;
        this.size = 0
    }

    isEmpty():boolean {
        return this.size === 0;
    } 

    push(val:T):void {
        const _Node = new Nods(val);
        _Node.pointer = this.top;
        this.top = _Node;
        this.size++;
    }

    pop():string {
        if(!this.top) return "Stack is empty"
        const deleted_val = this.top?.val;
        this.top = this.top?.pointer;
        this.size--;
        return `Value ${deleted_val} has been removed`;
        
    }
    peek():T| null {
        return this.top ? this.top.val : null
    }

    getSize(): number {
        return this.size;
    }
}


