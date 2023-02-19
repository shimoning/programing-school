// 既存の操作設定を削除する
document.removeEventListener('keydown', operation);

// canMove を追加した操作
function operation2 (e) {
  switch (e.code) {
    case 'ArrowUp': // 上
      if (canMove(0, -1)) {
        // 移動できる
        offsetY--;
      }
      break;
    case 'ArrowDown': // 下
      if (canMove(0, 1)) {
        // 移動できる
        offsetY++;
      }
      break;
    case 'ArrowRight': // 右
      if (canMove(1, 0)) {
        // 移動できる
        offsetX++;
      }
      break;
    case 'ArrowLeft': // 左
      if (canMove(-1, 0)) {
        // 移動できる
        offsetX--;
      }
      break;
  }

  // もうゲーム画面を表示する
  drawGameScreen();
  // またブロックを表示する
  drawBlock();
}
document.addEventListener('keydown', operation2);
