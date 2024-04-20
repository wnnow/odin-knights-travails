// Initialize an empty adjacency list for each square
let adjacencyList = {};
const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];
// Iterate over each square on the chessboard
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let square = [row, col];

    let squareAdjacencyList = [];

    // Iterate over possible moves from kPossibleMove array
    for (let move of directions) {
      let newRow = row + move[0];
      let newCol = col + move[1];

      // Check if the new square is within the chessboard boundaries
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        let newSquare = [newRow, newCol];
        squareAdjacencyList.push(newSquare);
      }
    }

    // Add the adjacency list for the current square to the overall adjacency list
    adjacencyList[square] = squareAdjacencyList;
  }
}

// The adjacencyList object now contains the graph representation of the chessboard

// console.log('🚀 ~ adjacencyList:', adjacencyList);
