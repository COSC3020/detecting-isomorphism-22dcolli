are_isomorphic(graph1, graph2) {

    if(graph1.length !== graph2.length){
        return false;
    }

    if(countEdges(graph1) !== countEdges(graph2)){
        return false;
    }
    
    let map = [];
    let visited = []

    //simular to the logic in graph-representations for edge traversal
    function countEdges(graph){
        let totalEdge =0;

        for(let i=0;i < graph.length; i++){
            let rowEdge = 0;

            for (let j=0; j < graph[i].length; j++){
                rowEdge += graph[i][j];
            }
            totalEdge += rowEdge;
        }

        return totalEdge;
    }
}
