let ws = new WebSocket(location.origin.replace(/^http/, 'ws'));
    ws.onmessage = ({data}) => { if (data != "Connected!") unpackData(data) }
    ws.onopen = function(evt) { document.title = "Xorox's maps | 🌐"; }; 
    ws.onclose = function(evt) {
       document.title = "Xorox's maps | ❌"; 
       document.getElementById("myCanvas").style.backgroundImage = "url(images/default_dance.png)";
       ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      };
