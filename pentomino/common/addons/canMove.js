// ==================================================
// 移動できるか確認する
// ==================================================

// dx: 左右の移動する数
// dy: 上下の移動する数
// d って？: デルタという数学の用語で、「変化する量」という意味だよ
function canMove(dx, dy) {
  // 縦方向の数を数える
  const rowCount = block.SHAPE.length;

  // 横方向の数を数える
  const columnCount = block.SHAPE[0].length;

  // 上から順番に表示する
  for (let y = 0; y < rowCount; y++) {
    // 左から順番に表示する
    for (let x = 0; x < columnCount; x++) {
      // その場所にブロックがあれば
      if (block.SHAPE[y][x]) {
        // 次に移動する予定の位置を計算
        const nextPositionX = offsetX + x + dx;
        const nextPositionY = offsetY + y + dy;
        if (nextPositionX < 0) {
          // 横が0より小さい！
          // 左側にはみ出てる
          return false; // return をするとここで処理が終了するよ！
        }
        if (nextPositionX >= BOARD_COL) { // = がついているぞ！
          // 横がマスの数と同じか、それより多い！
          // 右側にはみ出てる
          return false;
        }
        if (nextPositionY < 0) {
          // 縦が0より小さい！
          // 上側にはみ出てる
          return false;
        }
        if (nextPositionY >= BOARD_ROW) {
          // 縦がマスの数と同じか、それより多い！
          // 下側にはみ出てる
          return false;
        }
      }
    }
  }

  // ここまで来たってことは、途中で return false されなかったってこと
  // つまり移動できる！
  return true;
}
