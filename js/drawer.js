var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 10;
var map;

function unpackData(data) {
    try {
        data = JSON.parse(data);
        document.getElementById("map").src = "maps/"+ map +"_radar.png";
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        map = Object.keys(data)[0];

        for (var i in data[map].Enemy) {
            if (data[map].Enemy[i].Health > 0) drawRectEnemy(data[map].Enemy[i].X, data[map].Enemy[i].Y);
        }
    
        for (var i in data[map].Team) {
            if (data[map].Team[i].Health > 0) drawRectTeam(data[map].Team[i].X, data[map].Team[i].Y);
        } 
    } catch (exc) { 
        console.log("Incorrect input");
        console.log(data);
        document.getElementById("map").src = "images/default_dance.png";
    }
}

function drawRectEnemy(X, Y) {
    ctx.fillStyle = "red"
    ctx.fillRect(X-size/2, Y-size/2, size, size);

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14); /* x 22/2 and y 14/2 */
}

function drawRectTeam(X, Y) {
    ctx.fillStyle = "blue"
    ctx.fillRect(X-size/2, Y-size/2, size, size);

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14);  x 22/2 and y 14/2 */
}

function icon(name) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = "images/favicons/"+ name + ".png";
    document.getElementsByTagName('head')[0].appendChild(link);
}