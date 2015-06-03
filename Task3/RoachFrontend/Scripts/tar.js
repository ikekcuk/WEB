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
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(750, 100);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(750, 200);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(750, 300);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(750, 400);
    ctx.strokeStyle = "green";
    ctx.stroke();


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


    setTimeout("play()", 200);
   // addEventListener("load", play);

}

b1 = 0;
b2 = 0;
b3 = 0;
b4 = 0;
var username1;
var username2;
var username3;
var username4;

n1 = 0;
n2 = 0;
n3 = 0;
n4 = 0;
addEventListener("load", initiate);
function get1() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b1 = document.forms["task1"].elements["b1"].value - 0;
    username1 = document.forms["task1"].elements["username1"].value;
    if (document.getElementById("Radio1").checked) {
        n1 = 1;
    }
    else if (document.getElementById("Radio12").checked) {
        n1 = 2;
    }
    else if (document.getElementById("Radio13").checked) {
        n1 = 3;
    }
    else if (document.getElementById("Radio14").checked) {
        n1 = 4;
    }
    ctx.fillText(username1 + ' chose number  ' + n1 + '  with sum = ' + b1, 30, 20);
}
function get2() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b2 = document.forms["task2"].elements["b2"].value - 0;
    username2 = document.forms["task2"].elements["username2"].value;
    if (document.getElementById("Radio21").checked) {
        n2 = 1;
    }
    else if (document.getElementById("Radio22").checked) {
        n2 = 2;
    }
    else if (document.getElementById("Radio23").checked) {
        n2 = 3;
    }
    else if (document.getElementById("Radio24").checked) {
        n2 = 4;
    }
    ctx.fillText(username2 + ' chose number  ' + n2 + '  with sum = ' + b2, 30, 30);
}
function get3() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b3 = document.forms["task3"].elements["b3"].value - 0;
    username3 = document.forms["task3"].elements["username3"].value;
    if (document.getElementById("Radio31").checked) {
        n3 = 1;
    }
    else if (document.getElementById("Radio32").checked) {
        n3 = 2;
    }
    else if (document.getElementById("Radio33").checked) {
        n3 = 3;
    }
    else if (document.getElementById("Radio34").checked) {
        n3 = 4;
    }
    ctx.fillText(username3 + ' chose number  ' + n3 + '  with sum = ' + b3, 30, 40);
}
function get4() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b4 = document.forms["task4"].elements["b4"].value - 0;
    username4 = document.forms["task4"].elements["username4"].value;
    if (document.getElementById("Radio41").checked) {
        n4 = 1;
    }
    else if (document.getElementById("Radio42").checked) {
        n4 = 2;
    }
    else if (document.getElementById("Radio43").checked) {
        n4 = 3;
    }
    else if (document.getElementById("Radio44").checked) {
        n4 = 4;
    }
    ctx.fillText(username4 + ' chose number  ' + n4 + '  with sum = ' + b4, 30, 50);
}
banks = 0;
function bank() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    banks = b1 + b2 + b3 + b4;
    ctx.fillText('TOTAL SUM = ' + banks, 300, 30);
}
w1 = 0;
w2 = 0;
w3 = 0;
w4 = 0;
function result()
{
    var canvas = document.getElementById("map2");
    var ctx = canvas.getContext("2d");
    //player 1 - winner
    if((n1==1)&&(ct1==1)&&(n1!=n2)&&(n1!=n3)&&(n1!=n4))
    {
        ctx.fillText(username1 + ', won with SUM = ' + banks, 10, 10);
        w1 == banks;}
    if((n1==2)&&(ct2==1)&&(n1!=n2)&&(n1!=n3)&&(n1!=n4))
    {
        ctx.fillText(username1 +', won with SUM = ' + banks, 10, 10);
        w1 == banks;
    }
    if((n1==3)&&(ct3==1)&&(n1!=n2)&&(n1!=n3)&&(n1!=n4))
    {
        ctx.fillText(username1 + ', won with SUM = ' + banks, 10, 10);
        w1 == banks;
    }
    if((n1==4)&&(ct4==1)&&(n1!=n2)&&(n1!=n3)&&(n1!=n4))
    {
        ctx.fillText(username1 + ', won with SUM = ' + banks, 10, 10);
        w1 == banks;
    }

    //player 2 - winner
    if((n2==1)&&(ct1==1)&&(n2!=n1)&&(n2!=n3)&&(n2!=n4))
    {
        ctx.fillText(username2 + ', won with SUM = ' + banks, 10, 10);
        w2 == banks;}
    if((n2==2)&&(ct2==1)&&(n2!=n1)&&(n2!=n3)&&(n2!=n4))
    {
        ctx.fillText(username2+ ', won with SUM = ' + banks, 10, 10);
        w2 == banks;
    }
    if((n2==3)&&(ct3==1)&&(n2!=n1)&&(n2!=n3)&&(n2!=n4))
    {
        ctx.fillText(username2+ ', won with SUM = ' + banks, 10, 10);
        w2 == banks;
    }
    if((n2==4)&&(ct4==1)&&(n2!=n1)&&(n2!=n3)&&(n2!=n4))
    {
        ctx.fillText(username2+ ', won with SUM = ' + banks, 10, 10);
        w2 == banks;
    }

    //player 3 - winner
    if((n3==1)&&(ct1==1)&&(n3!=n1)&&(n3!=n2)&&(n3!=n4))
    {
        ctx.fillText(username3 + ', won with SUM = ' + banks, 10, 10);
        w3 == banks;}
    if((n3==2)&&(ct2==1)&&(n3!=n1)&&(n3!=n2)&&(n3!=n4))
    {
        ctx.fillText(username3 + ', won with SUM = ' + banks, 10, 10);
        w3 == banks;
    }
    if((n3==3)&&(ct3==1)&&(n3!=n1)&&(n3!=n2)&&(n3!=n4))
    {
        ctx.fillText(username3 + ', won with SUM = ' + banks, 10, 10);
        w3 == banks;
    }
    if((n3==4)&&(ct4==1)&&(n3!=n1)&&(n3!=n2)&&(n3!=n4))
    {
        ctx.fillText(username3 + ', won with SUM = ' + banks, 10, 10);
        w3 == banks;
    }

    //player 4 - winner
    if((n4==1)&&(ct1==1)&&(n4!=n2)&&(n4!=n3)&&(n4!=n1))
    {
        ctx.fillText(username4 + ', won with SUM = ' + banks, 10, 10);
        w4 == banks;}
    if((n4==2)&&(ct2==1)&&(n4!=n2)&&(n4!=n3)&&(n4!=n1))
    {
        ctx.fillText(username4 + ', won with SUM = ' + banks, 10, 10);
        w4 == banks;
    }
    if((n4==3)&&(ct3==1)&&(n4!=n2)&&(n4!=n3)&&(n4!=n1))
    {
        ctx.fillText(username4 + ', won with SUM = ' + banks, 10, 10);
        w4 == banks;
    }
    if((n4==4)&&(ct4==1)&&(n4!=n2)&&(n4!=n3)&&(n4!=n1))
    {
        ctx.fillText(username4 + ', won with SUM = ' + banks, 10, 10);
        w4 == banks;
    }

    //player 1,player 2 winners
    if((n1==1)&&(n2==1)&&(ct1==1)&&(n1!=n3)&&(n1!=n4)&&(n2!=n3)&&(n2!=n4))
    {
        ctx.fillText('Player 1 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w2 == banks / 2;}
    if ((n1 == 2) && (n2 == 2) && (ct2 == 1) && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4))
    {
        ctx.fillText('Player 1 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w2 == banks / 2;
    }
    if ((n1 == 3) && (n2 == 3) && (ct3 == 1) && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4))
    {
        ctx.fillText('Player 1 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w2 == banks / 2;
    }
    if ((n1 == 4) && (n2 == 4) && (ct4 == 1) && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4))
    {
        ctx.fillText('Player 1 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w2 == banks / 2;
    }

    //player 1,player 3 winners
    if ((n1 == 1) && (n3 == 1) && (ct1 == 1) && (n1 != n2) && (n1 != n4) && (n3 != n2) && (n3 != n4))
    {
        ctx.fillText('Player 1 and 3 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w3 == banks / 2;
    }
    if ((n1 == 2) && (n3 == 2) && (ct2 == 1) && (n1 != n2) && (n1 != n4) && (n3 != n2) && (n3 != n4))
    {
        ctx.fillText('Player 1 and 3 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w3 == banks / 2;
    }
    if ((n1 == 3) && (n3 == 3) && (ct3 == 1) && (n1 != n2) && (n1 != n4) && (n3 != n2) && (n3 != n4))
    {
        ctx.fillText('Player 1 and 3 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w3 == banks / 2;
    }
    if ((n1 == 4) && (n3 == 4) && (ct4 == 1) && (n1 != n2) && (n1 != n4) && (n3 != n2) && (n3 != n4))
    {
        ctx.fillText('Player 1 and 3 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w3 == banks / 2;
    }

    //player 1,player 4 winners
    if ((n1 == 1) && (n4 == 1) && (ct1 == 1) && (n1 != n3) && (n1 != n2) && (n4 != n3) && (n4 != n2))
    {
        ctx.fillText('Player 1 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w4 == banks / 2;
    }
    if ((n1 == 2) && (n4 == 2) && (ct2 == 1) && (n1 != n3) && (n1 != n4) && (n4 != n3) && (n4 != n2))
    {
        ctx.fillText('Player 1 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w4 == banks / 2;
    }
    if ((n1 == 3) && (n4 == 3) && (ct3 == 1) && (n1 != n3) && (n1 != n4) && (n4 != n3) && (n4 != n2))
    {
        ctx.fillText('Player 1 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w4 == banks / 2;
    }
    if ((n1 == 4) && (n4 == 4) && (ct4 == 1) && (n1 != n3) && (n1 != n4) && (n4 != n3) && (n4 != n2))
    {
        ctx.fillText('Player 1 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w1 == banks / 2;
        w4 == banks / 2;
    }

    //player 3,player 2 winners
    if ((n3 == 1) && (n2 == 1) && (ct1 == 1) && (n3 != n1) && (n3 != n4) && (n2 != n1) && (n2 != n4))
    {
        ctx.fillText('Player 3 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w3 == banks / 2;
        w2 == banks / 2;
    }
    if ((n3 == 2) && (n2 == 2) && (ct2 == 1) && (n3 != n1) && (n3 != n4) && (n2 != n1) && (n2 != n4))
    {
        ctx.fillText('Player 3 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w3 == banks / 2;
        w2 == banks / 2;
    }
    if ((n3 == 3) && (n2 == 3) && (ct3 == 1) && (n3 != n1) && (n3 != n4) && (n2 != n1) && (n2 != n4))
    {
        ctx.fillText('Player 3 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w3 == banks / 2;
        w2 == banks / 2;
    }
    if ((n3 == 4) && (n2 == 4) && (ct4 == 1) && (n3 != n1) && (n3 != n4) && (n2 != n1) && (n2 != n4))
    {
        ctx.fillText('Player 3 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w3 == banks / 2;
        w2 == banks / 2;
    }

    //player 4,player 2 winners
    if ((n4 == 1) && (n2 == 1) && (ct1 == 1) && (n4 != n3) && (n4 != n1) && (n2 != n3) && (n2 != n1))
    {
        ctx.fillText('Player 4 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w2 == banks / 2;
    }
    if ((n4 == 2) && (n2 == 2) && (ct2 == 1) && (n4 != n3) && (n4 != n1) && (n2 != n3) && (n2 != n1))
    {
        ctx.fillText('Player 4 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w2 == banks / 2;
    }
    if ((n4 == 3) && (n2 == 3) && (ct3 == 1) && (n4 != n3) && (n4 != n1) && (n2 != n3) && (n2 != n1))
    {
        ctx.fillText('Player 4 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w2 == banks / 2;
    }
    if ((n4 == 4) && (n2 == 4) && (ct4 == 1) && (n4 != n3) && (n4 != n1) && (n2 != n3) && (n2 != n1))
    {
        ctx.fillText('Player 4 and 2 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w2 == banks / 2;
    }

    //player 3,player 4 winners
    if ((n3 == 1) && (n4 == 1) && (ct1 == 1) && (n3 != n1) && (n3 != n2) && (n4 != n1) && (n4 != n2))
    {
        ctx.fillText('Player 3 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w3 == banks / 2;
    }
    if ((n3 == 2) && (n4 == 2) && (ct2 == 1) && (n3 != n1) && (n3 != n2) && (n4 != n1) && (n4 != n2))
    {
        ctx.fillText('Player 3 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w3 == banks / 2;
    }
    if ((n3 == 3) && (n4 == 3) && (ct3 == 1) && (n3 != n1) && (n3 != n2) && (n4 != n1) && (n4 != n2))
    {
        ctx.fillText('Player 3 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w3 == banks / 2;
    }
    if ((n3 == 4) && (n4 == 4) && (ct4 == 1) && (n3 != n1) && (n3 != n2) && (n4 != n1) && (n4 != n2))
    {
        ctx.fillText('Player 3 and 4 won with SUM per each player = ' + banks / 2, 10, 10);
        w4 == banks / 2;
        w3 == banks / 2;
    }

    //player1.2.3 winners
    if ((n1 == 1) && (n2 == 1) && (n3 == 1) && (ct1 == 1) && (n1 != n4) && (n2 != n4) && (n3 != n4))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w3 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 2) && (n2 == 2) && (n3 == 2) && (ct2 == 1) && (n1 != n4) && (n2 != n4) && (n3 != n4))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w3 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 3) && (n2 == 3) && (n3 == 3) && (ct3 == 1) && (n1 != n4) && (n2 != n4) && (n3 != n4))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w3 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 4) && (n2 == 4) && (n3 == 4) && (ct4 == 1) && (n1 != n4) && (n2 != n4) && (n3 != n4))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w3 == banks / 3;
        w2 == banks / 3;
    }

    //player1.2.4 winners
    if ((n1 == 1) && (n2 == 1) && (n4 == 1) && (ct1 == 1) && (n1 != n3) && (n2 != n3) && (n4 != n3))
    {
        ctx.fillText('Player 1,2,4 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 2) && (n2 == 2) && (n4 == 2) && (ct2 == 1) && (n1 != n3) && (n2 != n3) && (n4 != n3))
    {
        ctx.fillText('Player 1,2,4 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 3) && (n2 == 3) && (n4 == 3) && (ct3 == 1) && (n1 != n3) && (n2 != n3) && (n4 != n3))
    {
        ctx.fillText('Player 1,2,4 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w2 == banks / 3;
    }
    if ((n1 == 4) && (n2 == 4) && (n4 == 4) && (ct4 == 1) && (n1 != n3) && (n2 != n3) && (n4 != n3))
    {
        ctx.fillText('Player 1,2,4 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w2 == banks / 3;
    }

    //player1.3.4 winners
    if ((n1 == 1) && (n4 == 1) && (n3 == 1) && (ct1 == 1) && (n1 != n2) && (n4 != n2) && (n3 != n2))
    {
        ctx.fillText('Player 1,4,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n1 == 2) && (n4 == 2) && (n3 == 2) && (ct2 == 1) && (n1 != n2) && (n4 != n2) && (n3 != n2))
    {
        ctx.fillText('Player 1,4,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n1 == 3) && (n4 == 3) && (n3 == 3) && (ct3 == 1) && (n1 != n2) && (n4 != n2) && (n3 != n2))
    {
        ctx.fillText('Player 1,4,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n1 == 4) && (n4 == 4) && (n3 == 4) && (ct4 == 1) && (n1 != n2) && (n4 != n2) && (n3 != n2))
    {
        ctx.fillText('Player 1,4,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w1 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }

    //player2.3.4 winners
    if ((n4 == 1) && (n2 == 1) && (n3 == 1) && (ct1 == 1) && (n4 != n1) && (n2 != n1) && (n3 != n1))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w2 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n4 == 2) && (n2 == 2) && (n3 == 2) && (ct2 == 1) && (n4 != n1) && (n2 != n1) && (n3 != n1))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w2 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n4 == 3) && (n2 == 3) && (n3 == 3) && (ct3 == 1) && (n4 != n1) && (n2 != n1) && (n3 != n1))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w2 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }
    if ((n4 == 4) && (n2 == 4) && (n3 == 4) && (ct4 == 1) && (n4 != n1) && (n2 != n1) && (n3 != n1))
    {
        ctx.fillText('Player 1,2,3 won with SUM per each player = ' + banks / 3, 10, 10);
        w2 == banks / 3;
        w4 == banks / 3;
        w3 == banks / 3;
    }

    if ((n1 == 1) && (n2 == 1) && (n3 == 1) && (n4 == 1) && (ct1 == 1))
    {
        ctx.fillText('Friendship WON with SUM per each player = ' + banks / 4, 10, 10);
        w1 == banks / 4;
        w2 == banks / 4;
        w3 == banks / 4;
        w4 == banks / 4;
    }
    if ((n1 == 2) && (n2 == 2) && (n3 == 2) && (n4 == 2) && (ct2 == 1))
    {
        ctx.fillText('Friendship WON with SUM per each player = ' + banks / 4, 10, 10);
        w1 == banks / 4;
        w2 == banks / 4;
        w3 == banks / 4;
        w4 == banks / 4;
    }
    if ((n1 == 3) && (n2 == 3) && (n3 == 3) && (n4 == 3) && (ct3 == 1))
    {
        ctx.fillText('Friendship WON with SUM per each player = ' + banks / 4, 10, 10);
        w1 == banks / 4;
        w2 == banks / 4;
        w3 == banks / 4;
        w4 == banks / 4;
    }
    if ((n1 == 4) && (n2 == 4) && (n3 == 4) && (n4 == 4) && (ct4 == 1))
    {
        ctx.fillText('Friendship WON with SUM per each player = ' + banks / 4, 10, 10);
        w1 == banks / 4;
        w2 == banks / 4;
        w3 == banks / 4;
        w4 == banks / 4;
    }

    if ((n1 != 1) && (n2 != 1) && (n3 != 1) && (n4 != 1) && (ct1 == 1))
    {
        ctx.fillText('THANKS FOR WATCHING =)', 10, 10);
        w1 == 0;
        w2 == 0;
        w3 == 0;
        w4 == 0;
    }
    if ((n1 != 2) && (n2 != 2) && (n3 != 2) && (n4 != 2) && (ct2 == 1))
    {
        ctx.fillText('THANKS FOR WATCHING =)', 10, 10);
        w1 == 0;
        w2 == 0;
        w3 == 0;
        w4 == 0;
    }
    if ((n1 != 3) && (n2 != 3) && (n3 != 3) && (n4 != 3) && (ct3 == 1))
    {
        ctx.fillText('THANKS FOR WATCHING =)', 10, 10);
        w1 == 0;
        w2 == 0;
        w3 == 0;
        w4 == 0;
    }
    if ((n1 != 4) && (n2 != 4) && (n3 != 4) && (n4 != 4) && (ct4 == 1))
    {
        ctx.fillText('THANKS FOR WATCHING =)', 10, 10);
        w1 == 0;
        w2 == 0;
        w3 == 0;
        w4 == 0;
    }
    ctx.fillText(w1, w2, w3, w4, 10, 20);

}
document.getElementById("win1").value = w1;
document.getElementById("win2").value = w2;
document.getElementById("win3").value = w3;
document.getElementById("win4").value = w4;
     