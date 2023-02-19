// 既存の操作設定を削除する
document.removeEventListener('keydown', operation);
document.removeEventListener('keydown', operation2);

// canMove と rotateBlock を追加した操作
function operation3 (e) {
  operation2(e)
  switch (e.code) {
    case 'Space':
      // 回転
      rotateBlock();
      break;
  }

  // もうゲーム画面を表示する
  drawGameScreen();
  // またブロックを表示する
  drawBlock();
}
document.addEventListener('keydown', operation3);
