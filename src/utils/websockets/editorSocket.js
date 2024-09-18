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

const setupWebSocket = (webSocket, onMessageFunction) => {
  webSocket.onopen = () => {
    console.log("WebSocket connection established");
  };

  webSocket.onclose = () => {
    console.log("WebSocket connection closed");
  };

  webSocket.onmessage = onMessageFunction;

  webSocket.onerror = (error) => {
    console.error("WebSocket error: ", error);
  };
};

export class WebSocketInstance {
  constructor(onMessageFunction) {
    this.ws = createWebSocket();
    this.clientId = generateClientId();
    this.isApplyingRemoteChange = false;

    setupWebSocket(this.ws, onMessageFunction);
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
