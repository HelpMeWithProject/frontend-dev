"use strict";
import GeneralWebSocket from "./generalWebSocketClass.js";

class EditorWebSocket extends GeneralWebSocket {
  constructor() {
    super(`wss://backend-test-production-d6fc.up.railway.app/`);

    this.setupWebSocket(this.webSocketEndpoint + "ws?name=" + this.username);
    this.initialEditorContent = "";
    this.webSocketName = "EDITOR";
    this.hasEditorInitialData = false;

    this.webSocketInstance.onmessage = (event) => {
      let message = event.data;
      console.log("Received message from the EDITOR server: ", message);

      if (!this.handshake) {
        if (message === this.username) {
          this.establishHandshake();
        }
      } else if (!this.hasEditorInitialData) {
        let initialContent = message;
        this.initialEditorContent = initialContent;
        // Create the editor with the initial content
      } else {
        // Hande edits
      }
    };
  }

  getInitialEditorContent() {
    return this.initialEditorContent;
  }
}

export default EditorWebSocket;
