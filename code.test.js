const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let graph1 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

let graph2 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

assert(are_isomorphic(graph1, graph2) === true;
