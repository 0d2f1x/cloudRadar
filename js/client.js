var HOST = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket("ws://xorox.herokuapp.com");
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }