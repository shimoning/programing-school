// 既存の操作設定を削除する
document.removeEventListener('keydown', operation);
document.removeEventListener('keydown', operation2);
document.removeEventListener('keydown', operation3);

// canMove と rotateBlock を追加した操作
function operation4 (e) {
  // 上が押された時
  if (e.code === 'ArrowUp') {
    // 何もしないで終了する
    return;
  }

  // それ以外の時は実行する
  operation3(e)
}
document.addEventListener('keydown', operation4);
