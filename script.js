
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;


cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#112";
ctx.fillRect(0, 0, W, H);


ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
  
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

 
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();


  setTimeout(animate, 100);
}
animate();
