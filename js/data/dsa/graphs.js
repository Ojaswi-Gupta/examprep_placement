export const GRAPHS_DATA = {
  category: "Graph Algorithms",
  icon: "🕸️",
  items: [
    {
      name: "Breadth-First Search (BFS)",
      description: "An algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It uses a Queue.",
      complexity: {
        time: "O(V + E) where V is vertices and E is edges",
        space: "O(V)"
      },
      code: `function BFS(graph, startNode) {
  let visited = new Set();
  let queue = [startNode];
  visited.add(startNode);
  
  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr);
    
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`
    },
    {
      name: "Depth-First Search (DFS)",
      description: "An algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking. It uses a Stack (or recursion).",
      complexity: {
        time: "O(V + E)",
        space: "O(V)"
      },
      code: `function DFS(graph, startNode, visited = new Set()) {
  visited.add(startNode);
  console.log(startNode);
  
  for (let neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      DFS(graph, neighbor, visited);
    }
  }
}`
    },
    {
      name: "Dijkstra's Shortest Path",
      description: "An algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It picks the unvisited vertex with the lowest distance, calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller.",
      image: "assets/dsa/graph.svg",
      complexity: {
        time: "O(E log V) with a priority queue/min-heap",
        space: "O(V)"
      },
      code: `// Conceptual outline using a priority queue
function dijkstra(graph, start) {
  let distances = {};
  let pq = new PriorityQueue(); // Min-Heap based
  
  for (let vertex in graph) distances[vertex] = Infinity;
  distances[start] = 0;
  pq.enqueue(start, 0);
  
  while (!pq.isEmpty()) {
    let { node: curr, priority: dist } = pq.dequeue();
    
    for (let neighbor in graph[curr]) {
      let newDist = dist + graph[curr][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }
  return distances;
}`
    }
  ]
};
