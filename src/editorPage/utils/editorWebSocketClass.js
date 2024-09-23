"use strict";
import GeneralWebSocket from "./generalWebSocketClass.js";
import { codeEditorStates } from "../components/codeEditorStore.js";

class EditorWebSocket extends GeneralWebSocket {
  constructor() {
    super(`wss://backend-test-production-d6fc.up.railway.app/`);
    this.isApplyingRemoteChange = false;
    this.setupWebSocket(this.webSocketEndpoint + "ws?name=" + this.username);
    this.initialEditorContent = "";
    this.webSocketName = "EDITOR";
    this.hasEditorInitialData = false;

    this.webSocketInstance.onmessage = (event) => {
      let message = event.data;
      console.log("Received message from the EDITOR server: ", message);

      // In case there is no handshake, establish handshake
      if (!this.handshake) {
        if (message === this.username) {
          this.establishHandshake();
        }

        // In case there is no initial data, process it
      } else if (!this.hasEditorInitialData) {
        this.processInitialEditorContent(message);

        // In other cases, just parse the message and apply remote content
      } else {
        let parsedMessage = JSON.parse(message);

        this.isApplyingRemoteChange = true;
        codeEditorStates.editorRef.executeEdits("remote", [
          {
            range: new monaco.Range(
              parsedMessage.change.range.startLineNumber,
              parsedMessage.change.range.startColumn,
              parsedMessage.change.range.endLineNumber,
              parsedMessage.change.range.endColumn
            ),
            text: parsedMessage.change.text,
          },
        ]);
        this.isApplyingRemoteChange = false;
      }
    };
  }

  processInitialEditorContent(message) {
    this.initialEditorContent = message;
    this.hasEditorInitialData = true;
  }

  getInitialEditorContent() {
    return this.initialEditorContent;
  }

  sendEditorChanges(changes) {
    this.webSocketInstance.send(changes);
  }

  setupEditorSendMessage() {
    codeEditorStates.editorRef.onDidChangeModelContent((event) => {
      if (!this.isApplyingRemoteChange) {
        let change = event.changes[0];
        this.webSocketInstance.send(
          JSON.stringify({
            clientId: this.id,
            change: {
              range: change.range,
              text: change.text,
            },
          })
        );
      }
    });
  }
}

export default EditorWebSocket;
