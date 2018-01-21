import gameState from './GameState';

class Cell {
  constructor(x, y, ship, fieldType, attempted) {
    this.htmlNode = document.createElement('div');
    this.htmlNode.className = `cell ${fieldType === 'computer' ? '' : ship ? 'has-ship' : '' }`;
    this.htmlNode.className += `${attempted ? (ship ? ' hit' : ' miss') : ''}`;
    this.x = x;
    this.y = y;
    this.fieldType = fieldType;

    if (fieldType === 'computer') {
      this.htmlNode.addEventListener('click', this.attepmtCell.bind(this))
    }
    this.ship = ship;
  }
  attepmtCell() {
    this.htmlNode.className += `${this.ship ? ' hit' : ' miss'}`;
    gameState.shipAttempt(this.x, this.y, this.fieldType);
  }
}

/* const Cell = (ship) => {
  const cell = 
  cell.className = 
  cell.addEventListener('click', );

  return cell;
} */

export default Cell;