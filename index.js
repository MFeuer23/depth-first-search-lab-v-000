function depthFirstSearch(rootNode, vertices, edges) {
  let visitedVertices = []
  vsitedVertices.push(rootNode)
}


function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.discovered === null)
}