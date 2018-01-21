import Ship from './Ship';

class ShipsSet {
  constructor() {
    this.shipsPlacement = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.shipsPlacement[i] = new Array(10);
      for (let j = 0; j < 10; j++) {
        this.shipsPlacement[i][j] = 0;
      }
    }
    console.log(this.shipsPlacement);
  }
  generateRandomShip() {
    let ship;
    do {
      ship = new Ship(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    } while (!ship.inOnField());
    return ship;
  }
  generateSeveralShips(number) {
    let ships = [];
    for (let i = 0; i < number; i++) {
      do {
        ships[i] = this.generateRandomShip();
      } while (!this.spaceIsAvailable(ships[i]));

      this.assignPlacement(ships[i]);
    }
  }
  spaceIsAvailable(ship) {
    return this.shipsPlacement[ship.x][ship.y] === 0;
  }
  assignPlacement(ship) {
    this.shipsPlacement[ship.x][ship.y] = 1;
  }
}

export default ShipsSet;