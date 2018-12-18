function depthFirstSearch(rootNode, vertices, edges) {
  let discovered = [rootNode]
  let discoverOrder = [rootNode]
  while discovered 
}


function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.discovered === null)
}