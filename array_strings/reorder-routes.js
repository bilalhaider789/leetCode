// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

 

// Example 1:


// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 2:


// Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
// Output: 2
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 3:

// Input: n = 3, connections = [[1,0],[2,0]]
// Output: 0

const minReorder = (n, connections) => {
    const rootNodes = connections.filter(item => item.includes(0));
    let changes = 0;
    let visited= new Map();
    
    const checkRoutes = (node) => {
      visited.set(node.toString(), 1);
        let next = node[0];
      let nextNodes = connections.filter(
        (item) => item.includes(next) && !visited.has(item.toString())
      );
      if (nextNodes.length) {
        for (let nextNode of nextNodes) {
          if (nextNode[1] != next) {
            changes += 1;
            const nextNodeIndex = connections.findIndex(
              (item) => item == nextNode
            );
            connections[nextNodeIndex] = [nextNode[1], nextNode[0]];
            checkRoutes(connections[nextNodeIndex]);
          } else {
            checkRoutes(nextNode);
          }
        }
      }
    };
    for (let node of rootNodes) {
        const nodeInex = connections.findIndex(item => item ==node);
        if(node[1]!=0){
            connections[nodeInex] = [node[1],node[0]];
            changes+=1;
        }
        checkRoutes(connections[nodeInex])

    }
    return changes;
};

console.log(
    minReorder(5, [
      
        [0, 1],
        [2, 1],
        [3, 2],
        [0, 4],
        [5, 1],
        [2, 6],
        [5, 7],
        [3, 8],
        [8, 9],
      
    ])
  );

// console.log(
//   minReorder(5, [
//     [1, 0],
//     [1, 2],
//     [3, 2],
//     [3, 4],
//   ])
// );

// console.log(
//   minReorder(5, [
//     [0, 1],
//     [1, 3],
//     [2, 3],
//     [4, 0],
//     [4, 5],
//   ])
// );
