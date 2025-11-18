const { contextBridge, ipcRenderer } = require('electron');

// Check if running in development mode
const isDev = process.env.VITE_DEV_SERVER_URL !== undefined;

if (isDev) {
  // Expose safe APIs to the renderer only in dev
  contextBridge.exposeInMainWorld('electronAPI', {
    // Send messages to main process
    sendMessage: (channel, data) => {
      ipcRenderer.send(channel, data);
    },

    // Listen for messages from main process
    onMessage: (channel, callback) => {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  });
} else {
  // Production: expose no APIs or limited safe ones if needed
  contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: () => {
      console.warn("Electron API disabled in production");
    },
    onMessage: () => {
      console.warn("Electron API disabled in production");
    }
  });
}
