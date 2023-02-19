// ==================================================
// 修正版: ブロックを時計回りに回転させる
// ==================================================
function rotateBlock() {
  // 縦方向の数を数える
  const rowCount = block.SHAPE.length;

  // 横方向の数を数える
  const columnCount = block.SHAPE[0].length;

  // 回転させる
  const newShape = [];
  for (let y = 0; y < rowCount; y++) { // 上から順番に置換する
    // 初期化
    newShape[y] = [];
    for (let x = 0; x < columnCount; x++) { // 左から順番に置換する
      // 時計回りに90度回転させる
      newShape[y][x] = block.SHAPE[columnCount - 1 - x][y];
    }
  }

  // 回転して良いかチェックする
  // 回転しているだけだから、x も y も移動していないよ！ = 0
  if (canMove(0, 0, newShape)) {
    block.SHAPE = newShape
  }
}
