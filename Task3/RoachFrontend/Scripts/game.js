function initiate() {
    var element = document.getElementById("canvas");
    var ctx = element.getContext('2d');
    canvas.font = "bold 20px segoe UI";
    ctx.lineWidth = 5.5;


}

ctx.beginPath();
ctx.lineCap = 'butt';
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 10;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fill()
ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(750, 100);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fill()
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(750, 200);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fill()
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(750, 300);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fill()
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(750, 400);
ctx.strokeStyle = "black";
ctx.stroke();

addEventListener("load", initiate);