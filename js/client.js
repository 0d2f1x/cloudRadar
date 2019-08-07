let ws = new WebSocket(location.origin.replace(/^http/, 'ws'));
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }
    myWebSocket.onopen = function(evt) { document.title = "Xorox's maps | 🌐"; }; 
    ws.onclose = function(evt) { document.title = "Xorox's maps | ❌"; };
