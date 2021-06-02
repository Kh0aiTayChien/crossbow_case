let level = 1;
let LIMIT = 9999;
const RELOAD = 100;
let countTime = 500;
let count = 0;
let isPlaying = true;
let canvas = document.getElementById('game')
let ctx = canvas.getContext('2d')
let y_target = 500
let y_crossbow = 100
let x_arrow = 100
let speed_target = 3;
let speed_crossbow = 3
let speed_arrow = 50
let y_arrow = y_crossbow;
let score;