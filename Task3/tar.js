
function getRandomArbitary(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}
var q = 0;
var w = 0;
var e = 0;
var r = 0;
var ct = 0;
var ct1 = 0;
var ct2 = 0;
var ct3 = 0;
var ct4 = 0;
var q1 = 1;
var q2 = 1;
var q3 = 1;
var q4 = 1;
var Lol = true;
var fix = false;



function game() {
    if (!fix) {
        Lol = true;
        Next();
        play();
        fix = true;
    }
    else
        return;
}


function Next() {
    q = 0;
    w = 0;
    e = 0;
    r = 0;
    ct = 0;
    ct1 = 0;
    ct2 = 0;
    ct3 = 0;
    ct4 = 0;
    q1 = 1;
    q2 = 1;
    q3 = 1;
    q4 = 1;
}





function play() {

    var i = getRandomArbitary(-3, 6) * 5;
    if (q > 750) {
        i = 0;
        q = 950;
    }
    var j = getRandomArbitary(-3, 6) * 5;
    if (w > 750) {
        j = 0;
        w = 950;
    }
    var p = getRandomArbitary(-3, 6) * 5;
    if (e > 750) {
        p = 0;
        e = 950;
    }
    var k = getRandomArbitary(-3, 6) * 5;
    if (r > 750) {
        k = 0;
        r = 950
    }



    var start = performance.now();
    var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5.5;

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

    if (Lol) {
        var img = document.getElementById('bug');
        ctx.drawImage(img, q, 20);
        q = q + i;
        var img1 = document.getElementById('bug');
        ctx.drawImage(img, w, 120);
        w = w + j
        var img2 = document.getElementById('bug');
        ctx.drawImage(img, e, 220);
        e = e + p;
        var img3 = document.getElementById('bug');
        ctx.drawImage(img, r, 320);
        r = r + k;
        setTimeout("play()", 200);
    }



    if ((q > 750) && (q1 != 0)) {
        ct++;
        q1 = 0;
        ct1 = ct;
    }


    if ((w > 750) && (q2 != 0)) {
        ct++;
        ct2 = ct;
        q2 = 0;
    }


    if ((e > 750) && (q3 != 0)) {
        ct++;
        ct3 = ct;
        q3 = 0;
    }


    if ((r > 750) && (q4 != 0)) {
        ct++;
        ct4 = ct;
        q4 = 0;
    }




    ctx.fillText(ct1, 100, 30);
    ctx.fillText(ct2, 100, 130);
    ctx.fillText(ct3, 100, 230);
    ctx.fillText(ct4, 100, 330);

    if ((q > 780) && (w > 780) && (e > 780) && (r > 780)) {
        Lol = false;
        fix = false;
    };




}
//ñòàâêà
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

b11 = 0;
b12 = 0;
b13 = 0;
b14 = 0;
b21 = 0;
b22 = 0;
b23 = 0;
b24 = 0;
b31 = 0;
b32 = 0;
b33 = 0;
b34 = 0;
//áàíê òàðàêàíîâ
tr1 = 0;
tr2 = 0;
tr3 = 0;
tr4 = 0;
//âûáîðêà
n11 = 0;
n12 = 0;
n13 = 0;
n14 = 0;
n21 = 0;
n22 = 0;
n23 = 0;
n24 = 0;
n31 = 0;
n32 = 0;
n33 = 0;
n34 = 0;
p1 = 0;
p2 = 0;
p3 = 0;
banks = 0;
addEventListener("load", initiate);

function get1() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    x1 = 10;
    y1 = 10;
    if (document.getElementById("checkbox11").checked) {
        n11 = 1;
        b11 = document.forms["task1"].elements["b11"].value - 0;
        ctx.fillText('player 1 - bug  ' + n11 + '  stavka = ' + b11, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c1++;
    }
    if (document.getElementById("checkbox12").checked) {
        n12 = 1;

        b12 = document.forms["task1"].elements["b12"].value - 0;
        ctx.fillText('player 1  - bug ' + n12 + ' stavka = ' + b12, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c2++;
    }
    if (document.getElementById("checkbox13").checked) {
        n13 = 1;

        b13 = document.forms["task1"].elements["b13"].value - 0;
        ctx.fillText('player 1 - bug ' + n13 + '  stavka = ' + b13, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c3++;

    }
    if (document.getElementById("checkbox14").checked) {
        n14 = 1;
        p1 = p1 + 1;
        b14 = document.forms["task1"].elements["b14"].value - 0;
        ctx.fillText('player 1  bug  ' + n14 + '  stavka = ' + b14, x1, y1);
        c4++;

    }
    banks = b11 + b12 + b13 + b14 + b21 + b22 + b23 + b24 + b33 + b32 + b31 + b34;
    document.getElementById("bank").value = banks;
}
function get2() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    x2 = 200;
    y2 = 10;
    if (document.getElementById("checkbox21").checked) {
        n21 = 1;
        b21 = document.forms["task2"].elements["b21"].value - 0;
        ctx.fillText('player 2  -  bug  ' + n21 + '   stavka = ' + b21, x2, y2);
        y2 = y2 + 10;
        p2 = p2 + 1;
        c1++;
    }
    if (document.getElementById("checkbox22").checked) {
        n22 = 1;
        b22 = document.forms["task2"].elements["b22"].value - 0;
        ctx.fillText('player 2  - bug  ' + n22 + '  stavka = ' + b22, x2, y2);
        y2 = y2 + 10;
        p2 = p2 + 1;
        c2++;
    }
    if (document.getElementById("checkbox23").checked) {
        n23 = 1;
        b23 = document.forms["task2"].elements["b23"].value - 0;
        ctx.fillText('player 2 - bug   ' + n23 + ' stavka = ' + b23, x2, y2);
        y2 = y2 + 10;
        p2 = p2 + 1;
        c3++;

    }
    if (document.getElementById("checkbox24").checked) {
        n24 = 1;
        b24 = document.forms["task2"].elements["b24"].value - 0;
        ctx.fillText('player 2 - bug  ' + n24 + ' stavka = ' + b24, x2, y2);
        p2 = p2 + 1;
        c4++;

    }
    banks = b11 + b12 + b13 + b14 + b21 + b22 + b23 + b24 + b33 + b32 + b31 + b34;
    document.getElementById("bank").value = banks;
}
function get3() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    x3 = 400;
    y3 = 10;
    if (document.getElementById("checkbox31").checked) {
        n31 = 1;
        b31 = document.forms["task3"].elements["b31"].value - 0;
        ctx.fillText('player 3 - bug ' + n31 + ' stavka = ' + b31, x3, y3);
        y3 = y3 + 10;
        p3 = p3 + 1;
        c1++;
    }
    if (document.getElementById("checkbox32").checked) {
        n32 = 1;
        b32 = document.forms["task3"].elements["b32"].value - 0;
        ctx.fillText('player 3 - bug ' + n32 + ' stavka = ' + b32, x3, y3);
        y3 = y3 + 10;
        p3 = p3 + 1;
        c2++;
    }
    if (document.getElementById("checkbox33").checked) {
        n33 = 1;
        b33 = document.forms["task3"].elements["b33"].value - 0;
        ctx.fillText('player 3 - bug  ' + n33 + ' stavka = ' + b33, x3, y3);
        y3 = y3 + 10;
        p3 = p3 + 1;
        c3++;

    }
    if (document.getElementById("checkbox34").checked) {
        n34 = 1;
        b34 = document.forms["task3"].elements["b34"].value - 0;
        ctx.fillText('player 3  bug   ' + n34 + ' stavka = ' + b34, x3, y3);
        p3 = p3 + 1;
        c4++;
    }
    banks = b11 + b12 + b13 + b14 + b21 + b22 + b23 + b24 + b33 + b32 + b31 + b34;
    document.getElementById("bank").value = banks;
}



function result() {
    vp1 = 0;
    vp2 = 0;
    vp3 = 0;


    var coef1 = 0;
    var coef2 = 0;
    var coef3 = 0;
    var coef4 = 0;


    if (ct1 == 1) {
        coef1 = 2;
    }
    else if (ct2 == 1) {
        coef2 = 2;
    }
    else if (ct3 == 1) {
        coef3 = 2;
    }
    else if (ct4 == 1) {
        coef4 = 2;
    }

    if (ct1 == 2) {
        coef1 = 0.5;
    }
    else if (ct2 == 2) {
        coef2 = 0.5;
    }
    else if (ct3 == 2) {
        coef3 = 0.5;
    }
    else if (ct4 == 2) {
        coef4 = 0.5;
    }

    if (ct1 == 3) {
        coef1 = 0;
    }
    else if (ct2 == 3) {
        coef2 = 0;
    }
    else if (ct3 == 3) {
        coef3 = 0;
    }
    else if (ct4 == 3) {
        coef4 = 0;
    }

    if (ct1 == 4) {
        coef1 = 0;
    }
    else if (ct2 == 4) {
        coef2 = 0;
    }
    else if (ct3 == 4) {
        coef3 = 0;
    }
    else if (ct4 == 4) {
        coef4 = 0;
    }


    vp1 = Math.round((b11 * coef1) + (b12 * coef2) + (b13 * coef3) + (b14 * coef4));
    vp2 = Math.round((b21 * coef1) + (b22 * coef2) + (b23 * coef3) + (b24 * coef4));
    vp3 = Math.round((b31 * coef1) + (b32 * coef2) + (b33 * coef3) + (b34 * coef4));


    document.getElementById("pvin1").value = vp1;
    document.getElementById("pvin2").value = vp2;
    document.getElementById("pvin3").value = vp3;
    document.getElementById("bank").value = banks - vp1 - vp2 - vp3;
}
     
=======

>>>>>>> 5578f174e400b3da8764184ddf3a97aeac068f0a
