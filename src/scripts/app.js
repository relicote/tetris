const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const board = [];
const bgm = document.createElement('audio');
const breakSound = document.createElement('audio');
const drop = document.createElement('audio')

let rotatedShape;

bgm.setAttribute('src', './assets/bgm.mp3');
bgm.muted = true;

breakSound.setAttribute('src', './assets/break.mp3');
bgm.muted = true;

breakSound.setAttribute('src', './assets/drop.mp3');
bgm.muted = true;

for(let row = 0; row < BOARD_HEIGHT; row++){
    board[row] = [];
    for(let col =0; col < BOARD_WIDTH; col++){
        board[row][col] = 0;
    }
}

const tetrominoes = [
    {
        shape: [
            [1,1],
            [1,1]
        ],
        color: '#ffd800'
    },
    {
        shape: [
            [0,2,0],
            [2,2,2],
        ],
        color: '#7925dd'
    }
]
