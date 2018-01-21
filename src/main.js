import GameField from './GameField';
import gameState from './GameState';

const app = document.getElementById('app');
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const notification = document.createElement('div');
notification.className = 'notification';

const render = () => {
  wrapper.append(GameField('computer'));
  wrapper.append(GameField('user'));
};

const clear = () => {
  wrapper.innerHTML = '';
};

gameState.reRender = () => {
  clear();
  render();
  notification.innerHTML = `It's ${gameState.shootingTurn}'s turn!`;
};

const main = () => {
  gameState.startGame();
  notification.innerHTML = `It's ${gameState.shootingTurn}'s turn!`;
  app.appendChild(notification);
  app.append(wrapper);
  render();
};

main();