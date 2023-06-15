class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;

    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) { // Remove vertex and its edges
        // If vertex not in adjacency list, return undefined
        if (!this.adjacencyList[vertex]) return undefined;
        // While vertex has connected edges
        while(this.adjacencyList[vertex].length) {
            // Remove last connected vertex from list
            let temp = this.adjacencyList[vertex].pop();
            // Remove edge between vertex and temp
            this.removeEdge(vertex, temp);
        }
        // Delete vertex from the adjacency list
        delete this.adjacencyList[vertex];
        // Return graph object for method chaining
        return this;
    }
}

const graph = new Graph();
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(5,6);

