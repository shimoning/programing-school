// ==================================================
// 自動でブロックを落ちるようにする
// ==================================================

// 落ちる間隔: 小さくするほど早く落ちるよ
const FALL_INTERVAL = 1000; // 単位はミリ秒 = 1秒 の 1000分の1

// タイマーのIDを保存する変数
let fallTimer = null;

/**
 * 自動でブロックを落とす関数
 */
function autoFall() {
  // タイマーが設定されている場合
  if (fallTimer) {
    // タイマーを停止(クリア)するよ
    clearTimeout(fallTimer) // タイマーのIDを指定してタイマーを停止！

    // 停止されていることを明示的に表現するよ
    fallTimer = null;
  }

  // 下に行くことができない時
  if (! canMove(0, 1)) {
    // 何もしない！
    return;
  }

  // ここが実行されるということは、 canMove が true だったってこと
  // つまり、下に行くことができる時

  // 下に行く
  offsetY++;

  // 再度ゲーム画面を表示する (リセット)
  drawGameScreen();
  // 現在のブロックを表示する
  drawBlock();

  // fall(= この関数)を、一定時間後に実行させる
  // 一定時間: FALL_INTERVAL ミリ秒
  // setTimeout は「戻り値(返り値)」で、現在実行されているタイマーのIDを渡してくれるよ
  fallTimer = setTimeout(autoFall, FALL_INTERVAL);
}
