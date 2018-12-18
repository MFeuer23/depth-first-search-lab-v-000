function depthFirstSearch(rootNode, vertices, edges) {
  let discovered = [rootNode]
  let discoverOrder = [rootNode]
  while(discovered.length != 0){
    console.log(discovered)
    let currentNode = discovered.pop()
      if (currentNode.discovered === null) {
        currentNode.discovered = true
      }
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.push(adjacentNodes);
    discovered = discovered.push(adjacentNodes)
  }
  return discoverOrder
}


function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.discovered === null)
}