// 初期化処理
function init() {
  activate();
  drawGameScreen();
  drawBlock();

  // タイマーを追加！
  fallTimer = setTimeout(autoFall, FALL_INTERVAL);
}
