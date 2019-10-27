var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var borderColor = "black"
var size = 10;
var output;

function unpackData(data) {
    try {
        data = JSON.parse(data);
        output = data;
        var map = Object.keys(data)[0];
        document.getElementById("map").src = "maps/"+ map +"_radar.png";
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        if (data[map].Ct.player0 != undefined) { ctColor = "#66FFFF"; tColor = "red"; } else { ctColor = "red"; tColor = "#66FFFF"; }
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
    ctx.fillStyle = borderColor;
    ctx.fillRect(X-size/2-1, Y-size/2-1, size+2, size+2);

    ctx.fillStyle = color;
    ctx.fillRect(X-size/2, Y-size/2, size, size);
}

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14); /* x 22/2 and y 14/2 */