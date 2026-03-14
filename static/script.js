// This is a simple graph calculator functionality in JavaScript

class GraphCalculator {
    constructor() {
        this.graph = {};
    }

    addEdge(vertex1, vertex2) {
        if (!this.graph[vertex1]) {
            this.graph[vertex1] = [];
        }
        this.graph[vertex1].push(vertex2);
    }

    removeEdge(vertex1, vertex2) {
        if (this.graph[vertex1]) {
            this.graph[vertex1] = this.graph[vertex1].filter(vertex => vertex !== vertex2);
        }
    }

    getNeighbors(vertex) {
        return this.graph[vertex] || [];
    }

    displayGraph() {
        console.log(this.graph);
    }
}

// Example usage:
const graphCalculator = new GraphCalculator();
graphCalculator.addEdge('A', 'B');
graphCalculator.addEdge('A', 'C');
graphCalculator.addEdge('B', 'D');
graphCalculator.displayGraph();