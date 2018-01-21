import ShipsSet from './ShipsSet';

class GameState {
  constructor() {
    this.shootingTurn = null;
    this.reRender = null;
    this.interval = null;
    this.shipsSet = {
      user: new ShipsSet(),
      computer: new ShipsSet()
    };
    this.cells = {
      user: this.shipsSet.user.shipsPlacement.map((row) => {
        return row.map((cell) => {
          return { attempted: cell ? cell.attempted : false };
        })
      }),
      computer: this.shipsSet.computer.shipsPlacement.map((row) => {
        return row.map((cell) => {
          return { attempted: cell ? cell.attempted : false };
        })
      })
    };
    this.makeRandomShoot = this.makeRandomShoot.bind(this);
  }
  startGame() {
    const players = ['Computer', 'User'];
    this.shootingTurn = players[Math.round(Math.random())];
    console.log(this.shipsSet);
    console.log(this.cells);
    if (this.shootingTurn === 'Computer') {
      this.computerShoot();
    }
  }
  switchTurn() {
    this.shootingTurn = `${this.shootingTurn === 'Computer' ? 'User' : 'Computer'}`;
    this.reRender();
    clearInterval(this.interval);
    if (this.shootingTurn === 'Computer') {
      this.computerShoot();
    }
  }
  computerShoot() {
    this.interval = setInterval(this.makeRandomShoot, 1000);
  }
  makeRandomShoot() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.shipsSet.user.shipsPlacement[x][y] && this.shipsSet.user.shipsPlacement[x][y].attempted);
    this.shipAttempt(x, y, 'user');
  }
  shipAttempt(x, y, fieldType) {
    this.cellAttempt(x, y, fieldType);
    if (this.shipsSet[fieldType].shipsPlacement[x][y]) {
      this.shipsSet[fieldType].shipsPlacement[x][y].attemptShip();
    } else {
      this.switchTurn();
    }    
  }
  cellAttempt(x, y, fieldType) {
    this.cells[fieldType][x][y].attempted = true;
    this.reRender();
  }
}

export default new GameState();