var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 10;

function unpackData(data){
    //icon((Math.floor(Math.random() * 10) + 1));
    document.getElementById("map").src = "maps/de_dust2_radar.png";
    data = JSON.parse(data);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for (var i in data.Enemy) drawRectEnemy(data.Enemy[i].X, data.Enemy[i].Y);
    for (var i in data.Team) drawRectTeam(data.Team[i].X, data.Team[i].Y);
}

function drawRectEnemy(X, Y){
    ctx.fillStyle = "red"
    ctx.fillRect(X-size/2, Y-size/2, size, size);

    /*var img = new Image();
    img.src="images/C4.png";
    ctx.drawImage(img, X-11, Y-7, 22, 14); /* x 22/2 and y 14/2 */
}

function drawRectTeam(X, Y){
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