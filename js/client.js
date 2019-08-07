let ws = new WebSocket("wss://xorox.herokuapp.com:1337");
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }