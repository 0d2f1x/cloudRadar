var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var borderColor = "black";
var dangerZonceColor = "#39FF14";
var tColor;
var ctColor;
var size = 20;
var output;
var map;

function unpackData(data) {
    try {
        data = JSON.parse(data);
        output = data;
        map = Object.keys(data)[0];
        name = data.softer;
        document.getElementById("myCanvas").style.backgroundImage = "url(maps/"+ map +"_radar.png)";
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        try{
            if (data[map].Ct[name] != undefined) { ctColor = "#66FFFF"; tColor = "red"; } else { ctColor = "red"; tColor = "#66FFFF"; }
            for (var name in data[map].Ct) {
                if (data[map].Ct[name].Health > 0 && data[map].Ct[name].Dormant == false) 
                    drawCircle(data[map].Ct[name].X, data[map].Ct[name].Z, ctColor, data[map].Ct[name].Health, name, data[map].Ct[name].ViewAngle);
            }
        } catch (exc) {
            ctColor = dangerZonceColor;
            tColor = dangerZonceColor;
        }    
        for (var name in data[map].T) {
            if (data[map].T[name].Health > 0 && data[map].T[name].Dormant == false) 
                drawCircle(data[map].T[name].X, data[map].T[name].Z, tColor, data[map].T[name].Health, name, data[map].T[name].ViewAngle);
        }
    } catch (exc) { 
        console.log("Incorrect input");
        document.getElementById("myCanvas").style.backgroundImage = "url(images/default_dance.png)";
    }
}

function drawInfo(X, Y, health, name, angle){
    ctx.font = "20px roboto";
    ctx.fillStyle = "#000000";
    ctx.fillText(health, X-4, Y-15); 

    ctx.font = "20px roboto";
    ctx.fillStyle = "#39FF14";
    ctx.fillText(health, X-5, Y-15);

    ctx.font = "15px roboto";
    ctx.fillStyle = "#000000";
    ctx.fillText(name, X+14, Y+8); 

    ctx.font = "15px roboto";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(name, X+15, Y+8);

    ctx.moveTo(X, Y);
    let newX = X + 13 * Math.cos(Math.PI * -angle / 180.0);
    let newY = Y + 13 * Math.sin(Math.PI * -angle / 180.0);

    ctx.lineTo(newX, newY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawCircle(X, Y, color, health, name, angle) { 
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(X, Y, 13, 0, 2 * Math.PI, false);
    ctx.fill();
    drawInfo(X,Y, health, name, angle);
}

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14); /* x 22/2 and y 14/2 */