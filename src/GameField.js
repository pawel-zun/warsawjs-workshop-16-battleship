import Cell from './Cell';
import ShipsSet from './ShipsSet';

const GameField = () => {
  const field = document.createElement('div');
  field.className = 'field';

  const shipsSet = new ShipsSet();
  shipsSet.generateSeveralShips(20);
  shipsSet.shipsPlacement.forEach((row) => {
    row.forEach((cell) => {
      field.append(Cell(cell));
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