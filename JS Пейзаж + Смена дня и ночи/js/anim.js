function initiate() {
    var element = document.getElementById("can");
    var canvas = element.getContext('2d');
    time = "day";
    var d_x = 800;
    var d_y = -80;
    var draw = function () {
        if (time == "day") {
            if (d_x < 1380) {
                document.getElementById("style").href = "css/day.css";
                canvas.fillStyle = "deepskyblue";
                canvas.fillRect(0, 0, 1300, 800);
                canvas.beginPath();
                canvas.arc(d_x, d_y, 70, 0, Math.PI * 2, true); //start point, radius, starting angle, degree(rad), clockwise
                canvas.fillStyle = "yellow";
                canvas.fill(); 
                d_x += 1; d_y += 1;
            }
            else {
                time = "night";
                d_x = 800;
                d_y = -80;
            }

        }
        else if (time == "night") {
            if (d_x < 1380) {
                document.getElementById("style").href = "css/night.css";
                canvas.fillStyle = "navy";
                canvas.fillRect(0, 0, 1300, 800);
                canvas.beginPath();
                canvas.arc(d_x, d_y, 70, 0, Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
                canvas.fillStyle = "white";
                canvas.fill();
                d_x += 1; d_y += 1;
            }
            else {
                time = "day";
                d_x = 1000;
                d_y = -80;
            }
        }
    }
    setInterval(draw, 25);
}
addEventListener("load", initiate);