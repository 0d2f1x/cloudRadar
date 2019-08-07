let ws = new WebSocket(location.origin.replace(/^http/, 'ws'));
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }
    ws.onclose = function(evt) { alert("Connection closed."); };
