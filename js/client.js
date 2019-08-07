var HOST = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket(HOST);
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }
