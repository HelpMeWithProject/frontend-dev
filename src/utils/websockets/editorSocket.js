"use strict";

const createWebSocket = () => {
  let ws = new WebSocket(
    "wss://backend-test-production-d6fc.up.railway.app/ws"
  );
  return ws;
};

const generateClientId = () => {
  let clientId = "client_" + Math.random().toString(36).substr(2, 9);
  return clientId;
};

const setupWebSocket = (webSocket) => {
  webSocket.onopen = () => {
    console.log("WebSocket connection established");
  };

  webSocket.onclose = () => {
    console.log("WebSocket connection closed");
  };

  webSocket.onerror = (error) => {
    console.error("WebSocket error: ", error);
  };
};

export class WebSocketInstance {
  constructor() {
    this.ws = createWebSocket();
    this.clientId = generateClientId();
    this.isApplyingRemoteChange = false;

    setupWebSocket(this.ws);
  }

  send(data) {
    this.ws.send(
      JSON.stringify({
        clientId: this.clientId,
        ...data,
      })
    );
  }
}
