import { user } from "@/store/userStore";

class GeneralWebSocket {
  constructor(webSocketEndpoint) {
    this.webSocketName = "general";
    this.username = user.name || "anonymous";
    this.id = user.id || "client_" + Math.random().toString(36).substr(2, 9);
    this.webSocketEndpoint = webSocketEndpoint;
    this.webSocketInstance = null;
    this.handshake = false;
  }

  setupWebSocket(webSocketEndpoint) {
    this.webSocketInstance = new WebSocket(webSocketEndpoint);

    this.webSocketInstance.onopen = () => {
      this.webSocketInstance.send(this.id);
      console.log(
        "WebSocket connection established with the " +
          this.webSocketName +
          " server"
      );
    };

    this.webSocketInstance.onclose = () => {
      console.log(
        "WebSocket connection to the " + this.webSocketName + " closed"
      );
    };

    this.webSocketInstance.onerror = (error) => {
      console.error(
        "WebSocket error occurred with the " + this.webSocketName + " server",
        error
      );
    };
  }

  establishHandshake() {
    this.webSocketInstance.send("ready");
    this.handshake = true;
    console.log(`Handshake with the ${this.webSocketName} server complete`);
  }
}

export default GeneralWebSocket;
