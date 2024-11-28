function are_isomorphic(graph1, graph2) {

    //easy check 1 for number of nodes
    if(graph1.length !== graph2.length){
        return false;
    }

    //easy check 2 for same number of edges
    if(countEdges(graph1) !== countEdges(graph2)){
        return false;
    }
    
    let map = [];

    for (let i = 0; i < graph1.length; i++){
        map[i] = null;
    }

    let visited = [];

    for (let i = 0; i < graph2.length; i++){
        visited[i] = false;
    }

    //backtracks if conditions arent met
    function backtrack(node){

        if (node === graph1.length){
            return true;
        }

        for (let potenNext = 0; potenNext < graph2.length; potenNext++){

            if (!visited[potenNext] && isPossible(node, potenNext, map)){

                map[node] = potenNext;
                visited[potenNext] = true;

                if(backtrack(node + 1)){
                    return true;
                }

                //while fixing the isPossible function, replit AI tool noticed I originally wrote
                //"map[node] = false" instead of null
                map[node] = null;
                visited[potenNext] = false;
            }
        }

        return false;
    }

    //checks the matrix to see if mapping is possible
    function isPossible(node1, node2, map){
            
        for (let neighbor = 0; neighbor < graph1.length; neighbor++){

            if (graph1[node1][neighbor] > 0){

                let mappedNeighbor = map[neighbor];

                //had the isPossible function mostly set up, but I couldn't get this if statement correct or it would throw errors,
                //so I used replit's ai tool to complete this inner if statement
                if ((mappedNeighbor !== null) && (graph1[node1][neighbor] !== graph2[node2][mappedNeighbor])){
                    return false;
                }
            }
        }
        return true;
    }

    //simular function to graph-representations but with added counters for use here
    function countEdges(graph){
        let totalEdge = 0;

        for(let i = 0; i < graph.length; i++){
            let rowEdge = 0;

            for (let j = 0; j < graph[i].length; j++){
                rowEdge += graph[i][j];
            }
            totalEdge += rowEdge;
        }

        return totalEdge;
    }

    return backtrack(0);
}


//initial easy test
/*
const graph1 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

const graph2 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

console.log(are_isomorphic(graph1, graph2));
*/
