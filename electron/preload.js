const { contextBridge, ipcRenderer } = require('electron');

// Expose safe APIs to the renderer (React)
contextBridge.exposeInMainWorld('electronAPI', {
  // Example: send a message to the main process
  sendMessage: (channel, data) => {
    ipcRenderer.send(channel, data);
  },

  // Example: receive messages from the main process
  onMessage: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args));
  }
});
