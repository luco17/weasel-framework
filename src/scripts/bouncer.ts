interface Weasel {
  x: number;
  y: number;
  dx: number;
  dy: number;
  width: number;
  height: number;
}

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// Define weasel image
const weaselImg = new Image();
weaselImg.src =
  "https://cdn.pixabay.com/photo/2015/03/12/20/18/weasel-670951_960_720.png";

// Define weasel properties
var weasel = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  dx: 3,
  dy: -3,
  width: 50,
  height: 50,
};

function drawWeasel() {
  ctx?.drawImage(weaselImg, weasel.x, weasel.y, weasel.width, weasel.height);
}

function updateWeasel() {
  // Move weasel
  weasel.x += weasel.dx;
  weasel.y += weasel.dy;

  // Bounce off walls
  if (weasel.x + weasel.width > canvas.width || weasel.x < 0) {
    weasel.dx = -weasel.dx;
  }
  if (weasel.y + weasel.height > canvas.height || weasel.y < 0) {
    weasel.dy = -weasel.dy;
  }
}

function clearCanvas() {
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  clearCanvas();
  drawWeasel();
  updateWeasel();
  requestAnimationFrame(animate);
}

// Start animation
animate();
