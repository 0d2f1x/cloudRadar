let ws = new WebSocket("ws://192.168.0.107:1337");
    ws.onmessage = ({data}) => {
      if (data != "Connected!") {
      unpackData(data);
      }
    }