import Cell from './Cell';
import gameState from './GameState';

const GameField = (type) => {
  const field = document.createElement('div');
  field.className = `field ${type}`;
  const shipsSet = gameState.shipsSet[type];
  const cells = gameState.cells[type];

  shipsSet.shipsPlacement.forEach((row, x) => {
    row.forEach((cell, y) => {
      field.append(new Cell(x, y, cell, type, cells[x][y].attempted).htmlNode);
    });
  });

  /*
  let i = 0;
  while (i < 100) {
    field.append(Cell());
    i++
  }
  */

  return field;
}

export default GameField;