class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.value;
        for(let child of this.children) {
            yield* child;
        }
    }
}

let root = new Node(
    'A',
    [
        new Node(
            'B',
            [
                new Node('B1', []),
                new Node('B2', [
                    new Node('B21', [])
                ]),
                new Node('B3', [])
            ]
        ),
        new Node(
            'C',
            [
                new Node('C1', [
                    new Node('C11', [])
                ])
            ]
        ),
        new Node('D', [])
    ]
);

for(let node of root) {
    console.log(node);
}