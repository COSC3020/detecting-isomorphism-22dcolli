const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');
////
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
////

////
let fullyConnected1 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];

let fullyConnected2 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];
////

////
let notSame1 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

let notSame2 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];
////

////
let notSame3 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];

let notSame4 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];
////

////
let almostSame1 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];

let almostSame2 =[
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 0]
];

////
    

assert(are_isomorphic(graph1, graph2) === true);
assert(are_isomorphic(fullyConnected1, fullyConnected2) === true);
assert(are_isomorphic(notSame1, notSame2) === false);
assert(are_isomorphic(notSame3, notSame4) === false);
assert(are_isomorphic(almostSame1, almostSame2) === false);
