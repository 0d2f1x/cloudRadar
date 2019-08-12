var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 10;

function unpackData(data) {
    try {
        data = JSON.parse(data);
        var map = Object.keys(data)[0];
        document.getElementById("map").src = "maps/"+ map +"_radar.png";
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        if (data[map].Ct.player0 != undefined) { ctColor = "blue"; tColor = "red"; } else { ctColor = "red"; tColor = "blue"; }
        for (var i in data[map].Ct) if (data[map].Ct[i].Health > 0 && data[map].Ct[i].Dormant == false) {
            drawRect(data[map].Ct[i].X, data[map].Ct[i].Y, ctColor);
        }
        for (var i in data[map].T) if (data[map].T[i].Health > 0 && data[map].T[i].Dormant == false) {
            drawRect(data[map].T[i].X, data[map].T[i].Y, tColor);
        }
    } catch (exc) { 
        console.log("Incorrect input");
        document.getElementById("map").src = "images/default_dance.png";
    }
}

function drawRect(X, Y, color) { 
    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.rect(X-size/2, Y-size/2, size, size);
    ctx.fill();
    ctx.stroke();
}

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14); /* x 22/2 and y 14/2 */