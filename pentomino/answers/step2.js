// 矢印キーで操作できるようにする
document.onkeydown = (e) => {
  switch (e.key) {
    case 'ArrowUp': // 上
      if (canMove(0, -1)) {
        // 移動できる
        offsetY--;
      } else {
        // 移動できない
        return false;
      }
      break;
    case 'ArrowDown': // 下
      if (canMove(0, 1)) {
        // 移動できる
        offsetY++;
      } else {
        // 移動できない
        return false;
      }
      break;
    case 'ArrowRight': // 右
      if (canMove(1, 0)) {
        // 移動できる
        offsetX++;
      } else {
        // 移動できない
        return false;
      }
      break;
    case 'ArrowLeft': // 左
      if (canMove(-1, 0)) {
        // 移動できる
        offsetX--;
      } else {
        // 移動できない
        return false;
      }
      break;
  }

  // もうゲーム画面を表示する
  drawGameScreen();
  // またブロックを表示する
  drawBlock();
};
