// Initialize an empty adjacency list for each square
const adjacencyList = {};
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

function knightMove(startPosition, targetPosition) {
  const visited = [];
  const queue = [startPosition];
  const parents = {};

  while (queue.length > 0) {
    const currentSquare = queue.shift();
    const currentAdjacencyList = adjacencyList[currentSquare.join()];

    if (
      currentSquare[0] === targetPosition[0] &&
      currentSquare[1] === targetPosition[1]
    ) {
      // if match targetPosition create return path
      // backtracking through the parent of each square in parents array
      // The loop ends when it reaches the start position, where the parent square is not found in the parents array, causing square to become undefined.
      const path = [];
      let square = targetPosition;
      while (square) {
        path.unshift(square);
        square = parents[square.join()];
      }
      return path;
    }

    //if not match check the visited array that include currentSquare or not
    //if visited not include currentSquare push it to visited array
    //loop over currentSquare adjacency list
    //if neighbor square not visited yet push it to queue array
    //set parent of neighbor square to current square
    //now will loop over queue again
    const currentSquareStr = currentSquare.join();
    if (!visited.includes(currentSquareStr)) {
      visited.push(currentSquareStr);

      for (const neighbor of currentAdjacencyList) {
        const neighborStr = neighbor.join();
        if (!visited.includes(neighborStr)) {
          queue.push(neighbor);

          parents[neighborStr] = currentSquare;
        }
      }
    }
  }

  // Target is unreachable from the start
  return [];
}
const shortestPath = knightMove([4, 5], [6, 2]);
console.log('🚀 ~ shortestPath:', shortestPath);
