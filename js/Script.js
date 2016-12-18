/**
 * Created by hany on 14/12/16.
 */
jQuery(function () {

    drawInCanvas();
});

function drawInCanvas() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var rectWidth = 1200;
    var rectHeight = 100;
    var rectX = 200;
    var rectY = 350;
    var cornerRadius = 180;
    var begin = 400;
    var end = 50;
    var step = 250;
    context.beginPath();
    context.moveTo(begin-50, end);
    // 100,200
    context.lineTo(begin-50, step);
    // 200,200
    context.arc(begin + 129, step, cornerRadius, Math.PI, .5 * Math.PI, true);
    // 1600,400
    context.lineTo( (2 * rectX) + rectWidth, rectY+78);
    //
    context.arc((2 * rectX) + rectWidth, rectY + 258, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI);

    context.lineTo(begin+220, rectY + 450);
    //
    context.arc(begin +220-50 , rectY + 630, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI, true);
    context.lineTo((2 * rectX) + rectWidth, rectY + 800);
    //
    context.arc((2 * rectX) + rectWidth, rectY + 980, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI);
    context.lineTo(begin +220, rectY + 1160);
    //
    context.arc(begin +220-100, rectY + 1340, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI, true);
    context.lineTo(1000, rectY + 1520);
    //
    context.strokeStyle = "#039348";
    context.lineWidth = 35;
    context.stroke();
}

/*
*
*
* function drawInCanvas() {
 var canvas = document.getElementById('myCanvas');
 var context = canvas.getContext('2d');
 var rectWidth = 1200;
 var rectHeight = 100;
 var rectX = 200;
 var rectY = 350;
 var cornerRadius = 180;
 var begin = 400;
 var end = 50;
 var step = 250;
 context.beginPath();
 context.moveTo(begin+50, end);
 // 100,200
 context.lineTo(begin+50, step);
 // 200,200
 context.arc(begin + 229, step, cornerRadius, Math.PI, .5 * Math.PI, true);
 // 1600,400
 context.lineTo((2 * rectX) + rectWidth, rectY+78);
 //
 context.arc((2 * rectX) + rectWidth, rectY + 258, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI);

 context.lineTo(begin+220, rectY + 450);
 //
 context.arc(begin +220 , rectY + 630, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI, true);
 context.lineTo((2 * rectX) + rectWidth, rectY + 800);
 //
 context.arc((2 * rectX) + rectWidth, rectY + 980, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI);
 context.lineTo(begin +220, rectY + 1160);
 //
 context.arc(begin +220, rectY + 1340, cornerRadius, 1.5 * Math.PI, 0.5 * Math.PI, true);
 context.lineTo(1100, rectY + 1520);
 //
 context.strokeStyle = "#039348";
 context.lineWidth = 35;
 context.stroke();
 }
* */