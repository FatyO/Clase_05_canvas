const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY) {
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenX, origenY);
    CTX.lineTo(finalX, finalY);
    CTX.stroke();
}


var mouseX = 10;
var mouseY = 10;


function printCoords(mouseData) {
  mouseX = mouseData.clientX;
  mouseY = mouseData.clientY;
}


function renderLines() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  
  renderOneLine("purple", 2, 15, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 0, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 30, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 45, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 60, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 75, 0, mouseX, mouseY);
    renderOneLine("purple", 2, 90, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 105, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 120, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 135, 0, mouseX, mouseY);

  renderOneLine("purple", 2, 0, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 15, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 30, 1000, mouseX, mouseY); 
  renderOneLine("purple", 2, 45, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 60, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 75,1000, mouseX, mouseY);
  renderOneLine("purple", 2, 90, 1000, mouseX, mouseY); 
  renderOneLine("purple", 2, 105, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 120, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 135,1000, mouseX, mouseY); 
  
 
  renderOneLine("purple", 2, 1800, 1000, mouseX, mouseY);
renderOneLine("purple", 2, 1785, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1770, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1755, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1740, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1725, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1710, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1695, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1680, 1000, mouseX, mouseY);
  renderOneLine("purple", 2, 1665, 1000, mouseX, mouseY);
  
  renderOneLine("purple", 2, 1200, 0, mouseX, mouseY);
renderOneLine("purple", 2, 1285, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 1270, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 1255, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 1240, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 1225, 0, mouseX, mouseY);
  renderOneLine("purple", 2, 1210, 0, mouseX, mouseY);


  
  
  
    requestAnimationFrame(renderLines);
}


document.addEventListener("mousemove", printCoords);
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);
