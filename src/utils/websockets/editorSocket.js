"use strict";

const createWebSocket = (name) => {
  let ws = new WebSocket(
    "wss://backend-test-production-d6fc.up.railway.app/ws?name=" + name
  );
  return ws;
};

const generateClientId = () => {
  let clientId = "client_" + Math.random().toString(36).substr(2, 9);
  return clientId;
};

export class WebSocketInstance {
  constructor(onMessageFunction) {
    this.ws = createWebSocket("Filipko");
    this.clientId = generateClientId();
    this.isApplyingRemoteChange = false;
    this.handShake = false;
    this.hasInitialFile = false;

    this.setupWebSocket(onMessageFunction);
  }

  setupWebSocket(onMessageFunction) {
    this.ws.onopen = () => {
      console.log("WebSocket connection established");
      console.log("Sending clientId: ", this.clientId);
      webSocket.send(this.clientId);
    };

    this.ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    this.ws.onmessage = onMessageFunction;

    this.ws.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };
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
