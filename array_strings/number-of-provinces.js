// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

 

// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2


const findCircleNum = (isConnected) => {
  const visited = {};
  const n = isConnected.length;
  let provinces = 0;

  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      provinces++;
      visit(city);
    }
  }

  function visit(city) {
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (city === neighbor) {
        visited[neighbor] = true;
      } else if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        visited[neighbor] = true;
        visit(neighbor);
      }
    }
  }

  return provinces;
};

// console.log(
//   findCircleNum([
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// );

// console.log(
//   findCircleNum([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
//   ])
// );

console.log(
  findCircleNum([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ])
);
