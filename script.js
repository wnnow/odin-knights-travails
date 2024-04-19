const row = 8;
const column = 8;

function createTable(row, col) {
  const table = [];

  for (let i = 0; i < row; i++) {
    const rowTable = [];
    for (let j = 0; j < col; j++) {
      rowTable.push('0');
    }
    table.push(rowTable);
  }
  return table;
}

const table = createTable(row, column);
table[3][3] = 'k';

function findKnight() {
  const result = [];
  for (let i = 0; i < table[0].length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 'k') {
        result.push(i, j);
        return result;
      }
    }
  }
  return 'Impossible! Where r u?';
}

function findMoveLeftUp(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 1 < 0 || arr[1] - 2 < 0) return null;

  currentKnightPos[0] = currentKnightPos[0] - 1;
  currentKnightPos[1] = currentKnightPos[1] - 2;

  return currentKnightPos;
}

function findMoveUpLeft(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 2 < 0 || arr[1] - 1 < 0) return null;

  currentKnightPos[0] = currentKnightPos[0] - 2;
  currentKnightPos[1] = currentKnightPos[1] - 1;

  return currentKnightPos;
}

function findMoveUpRight(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 2 < 0 || arr[1] + 1 > column) return null;

  currentKnightPos[0] = currentKnightPos[0] - 2;
  currentKnightPos[1] = currentKnightPos[1] + 1;

  return currentKnightPos;
}

function findMoveRightUp(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] - 1 < 0 || arr[1] + 2 > column) return null;

  currentKnightPos[0] = currentKnightPos[0] - 1;
  currentKnightPos[1] = currentKnightPos[1] + 2;

  return currentKnightPos;
}

function findMoveRightDown(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 1 > row || arr[1] + 2 > column) return null;

  currentKnightPos[0] = currentKnightPos[0] + 1;
  currentKnightPos[1] = currentKnightPos[1] + 2;

  return currentKnightPos;
}

function findMoveDownRight(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 2 > row || arr[1] + 1 > column) return null;

  currentKnightPos[0] = currentKnightPos[0] + 2;
  currentKnightPos[1] = currentKnightPos[1] + 1;

  return currentKnightPos;
}

function findMoveDownLeft(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 2 > row || arr[1] - 1 < 0) return null;

  currentKnightPos[0] = currentKnightPos[0] + 2;
  currentKnightPos[1] = currentKnightPos[1] - 1;

  return currentKnightPos;
}

function findMoveLeftDown(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 1 > column || arr[1] - 2 < 0) return null;

  currentKnightPos[0] = currentKnightPos[0] + 1;
  currentKnightPos[1] = currentKnightPos[1] - 2;

  return currentKnightPos;
}

function moveLeftUp(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 1 < 0 || arr[1] - 2 < 0) return null;

  arr[0] = arr[0] - 1;
  arr[1] = arr[1] - 2;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveUpLeft(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 2 < 0 || arr[1] - 1 < 0) return null;

  arr[0] = arr[0] - 2;
  arr[1] = arr[1] - 1;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveUpRight(arr) {
  const currentKnightPos = findKnight();

  if (arr[0] - 2 < 0 || arr[1] + 1 > column) return null;

  arr[0] = arr[0] - 2;
  arr[1] = arr[1] + 1;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveRightUp(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] - 1 < 0 || arr[1] + 2 > column) return null;

  arr[0] = arr[0] - 1;
  arr[1] = arr[1] + 2;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveRightDown(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 1 > row || arr[1] + 2 > column) return null;

  arr[0] = arr[0] + 1;
  arr[1] = arr[1] + 2;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveDownRight(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 2 > row || arr[1] + 1 > column) return null;

  arr[0] = arr[0] + 2;
  arr[1] = arr[1] + 1;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveDownLeft(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 2 > row || arr[1] - 1 < 0) return null;

  arr[0] = arr[0] + 2;
  arr[1] = arr[1] - 1;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function moveLeftDown(arr) {
  const currentKnightPos = findKnight();
  if (arr[0] + 1 > column || arr[1] - 2 < 0) return null;

  arr[0] = arr[0] + 1;
  arr[1] = arr[1] - 2;
  updateKnightPos(arr, currentKnightPos);
  return arr;
}

function updateKnightPos(arr, currentPos) {
  table[currentPos[0]][currentPos[1]] = '0';
  table[arr[0]][arr[1]] = 'k';
}

function checkKnightMoveAbleSquare(knightPositionArr) {
  const result = [];
  result.push(
    findMoveLeftUp(knightPositionArr),
    findMoveUpLeft(knightPositionArr),
    findMoveUpRight(knightPositionArr),
    findMoveRightUp(knightPositionArr),
    findMoveRightDown(knightPositionArr),
    findMoveDownRight(knightPositionArr),
    findMoveDownLeft(knightPositionArr),
    findMoveLeftDown(knightPositionArr)
  );
  return result;
}

let knightSquare = findKnight();
console.log('🚀 ~ knightSquare:', knightSquare);
// moveLeftUp(knightSquare);
// moveUpLeft(knightSquare);
console.log(findMoveLeftUp(knightSquare));
console.log('🚀 ~ knightSquare:', knightSquare);
console.log(checkKnightMoveAbleSquare(knightSquare));
// moveUpRight(knightSquare);
// moveRightUp(knightSquare);
// moveRightDown(knightSquare);
// moveDownRight(knightSquare);
// moveDownLeft(knightSquare);
// moveLeftDown(knightSquare);
// console.log(table);
// console.log('🚀 ~ knightSquare:', knightSquare);
