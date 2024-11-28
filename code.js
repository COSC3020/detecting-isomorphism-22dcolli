function are_isomorphic(graph1, graph2) {

    if(graph1.length !== graph2.length){
        return false;
    }

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

                map[node] = null;
                visited[potenNext] = false;
            }
        }

        return false;
    }

    function isPossible(node1, node2, map){
            
        for (let neighbor = 0; neighbor < graph1.length; neighbor++){

            if (graph1[node1][neighbor] > 0){

                let mappedNeighbor = map[neighbor];
                if ((mappedNeighbor !== null) && (graph1[node1][neighbor] !== graph2[node2][mappedNeighbor])){
                    return false;
                }
            }
        }
        return true;
    }

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
