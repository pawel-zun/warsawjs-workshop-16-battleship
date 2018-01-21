const Cell = (ship) => {
  const cell = document.createElement('div');
  cell.className = `cell ${ship === 1 ? 'has-ship' : '' }`;

  return cell;
}

export default Cell;