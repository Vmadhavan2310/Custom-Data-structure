class Nods<T> {
    val: T;
    left: Nods<T> | null;
    right: Nods<T> | null;
    constructor(val:T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    private head: Nods<T> | null;
    private size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(val:T): Nods<T> {
        const _Node = new Nods(val);
        this.size++;
        if(this.head === null) {
            this.head = _Node;
            return _Node;
        }
        // Recursive method
        const AddNode = (node:Nods<T>):Nods<T> => {
            let current = node;
            if(val < current.val) {
                if(current.left === null) {
                    current.left = _Node;
                    return node;
                } else {
                    AddNode(current.left)
                }
            } else {
                if(current.right === null) {
                    current.right = _Node;
                    return node;
                } else {
                    AddNode(current.right)
                }
            }
            return node;
        }
        AddNode(this.head);
        return _Node;
    }

    contains(val:T): boolean {
        if(this.head?.val === val) return true;
        const findNode = (node:Nods<T> | null): boolean => {
            if(node === null) return false
            if(node.val === val) return true;
            if(val < node.val) {
                return findNode(node.left)
            } else {
                return findNode(node.right)
            }
        }
        return this.head ? findNode(this.head) : false;
    }

    find(val:T): Nods<T> | undefined {
        if(this.head?.val === val) return this.head;
        const findNode = (node:Nods<T> | null): Nods<T> | undefined  => {
            if(node === null) return undefined
            if(node.val === val) return node;
            if(val < node.val) {
                return findNode(node.left)
            } else {
                return findNode(node.right)
            }
        }
        return findNode(this.head);
    }
}
