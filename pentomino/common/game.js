// ==================================================
// ゲーム画面の設定！
// ==================================================
// ブロック1マスの大きさ
const BLOCK_SIZE = 30;

// 縦横のマスの数
const BOARD_ROW = 20;
const BOARD_COL = 12;

// ゲーム画面の大きさ
const WIDTH = BLOCK_SIZE * BOARD_COL;
const HEIGHT = BLOCK_SIZE * BOARD_ROW;

// ==================================================
// ブロックの設定！
// ==================================================
const BLOCKS = {
  // T字型
  T: {
    COLOR: '#fff',  // ブロックの色
    SHAPE: [        // ブロックの形
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 0],
    ],
  },
  // I字型 (一直線)
  I: {
    COLOR: '#fff',  // ブロックの色
    SHAPE: [        // ブロックの形
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
  },
  // J字型 (左に折れる)
  J: {
    COLOR: '#fff',  // ブロックの色
    SHAPE: [        // ブロックの形
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
    ],
  },
  // L字型 (右に折れる)
  L: {
    COLOR: '#fff',  // ブロックの色
    SHAPE: [        // ブロックの形
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
    ],
  },

  // 他にも5個のマスでいろんな形を作ってみよう
};

// ==================================================
// ゲームに必要な変数を準備するよ
// ==================================================

// ゲーム画面
let gameScreen = null;

// ブロックが上からと右から、何マスずれているか
// プログラムでは画面の位置を表現する時、左上から数える
let offsetX = 0;  // X = 横軸, 左が0
let offsetY = 0;  // Y = 縦軸, 上が0

// 現在のブロックの形
let shape = 'I';
let block = BLOCKS[shape];

// ==================================================
// ゲームのプログラムを書くよ
// ==================================================

// 初期化処理
function init() {
  activate();
  drawGameScreen();
  drawBlock()
}

// ゲーム画面起動
function activate() {
  // HTML の中で ゲーム画面 を特定する
  const gameBoard = document.getElementById("game-board");

  // ゲーム画面の大きさを設定する
  gameBoard.width = WIDTH;
  gameBoard.height = HEIGHT;

  // ゲーム画面を操作するための変数を取得する
  gameScreen = gameBoard.getContext("2d");
}

// ゲーム画面を表示する
function drawGameScreen() {
  // ゲーム画面の背景の色を設定
  gameScreen.fillStyle = '#000';

  // ゲーム画面の背景を塗りつぶす
  gameScreen.fillRect(0, 0, WIDTH, HEIGHT);
}

//　ブロックを表示する
function drawBlock() {
  // 縦方向の数を数える
  const rowCount = block.SHAPE.length;

  // 横方向の数を数える
  const columnCount = block.SHAPE[0].length;

  // 上から順番に表示する
  for (let y = 0; y < rowCount; y++) {
    // 左から順番に表示する
    for (let x = 0; x < columnCount; x++) {
      // 1 だったら表示する
      if (block.SHAPE[y][x]) {
        // y と x の順番が逆！気をつけて！
        drawMino(offsetX + x, offsetY + y, block.COLOR);
      }
    }
  }
}

// 1マス分のブロックを表示する
function drawMino(x, y, color) {
  // 縦横の位置を計算する
  const positionX = x * BLOCK_SIZE;  // positionX: 左からの位置
  const positionY = y * BLOCK_SIZE;  // positionY: 上からの位置

  // ブロックの色を設定
  gameScreen.fillStyle = color;

  // ブロックを表示
  gameScreen.fillRect(
    positionX,         // 左からの位置
    positionY,         // 上からの位置
    BLOCK_SIZE, // 横幅
    BLOCK_SIZE, // 高さ
  );

  // 線の色を設定
  gameScreen.strokeStyle = 'gray';

  // 線を表示
  gameScreen.strokeRect(positionX, positionY, BLOCK_SIZE, BLOCK_SIZE);
}

// 矢印キーで操作できるようにする
document.onkeydown = (e) => {
  switch (e.key) {
    case 'ArrowUp': // 上
      offsetY--;
      break;
    case 'ArrowDown': // 下
      offsetY++;
      break;
    case 'ArrowRight': // 右
      offsetX++;
      break;
    case 'ArrowLeft': // 左
      offsetX--;
      break;
  }

  // もうゲーム画面を表示する
  drawGameScreen();
  // またブロックを表示する
  drawBlock();
};
