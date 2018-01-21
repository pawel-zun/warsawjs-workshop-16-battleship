import GameField from './GameField';
import ShipsSet from './ShipsSet';

const main = () => {
  const app = document.getElementById('app');
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  wrapper.append(GameField());
  wrapper.append(GameField());
  app.append(wrapper);

};

main();