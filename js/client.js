let ws = new WebSocket("ws://xorox.herokuapp.com:1337");
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }