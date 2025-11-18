const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// Detect dev mode (Vite running)
const isDev = process.env.VITE_DEV_SERVER_URL !== undefined;

if (isDev) {
  // Enable auto reload in development
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules/.bin/electron.cmd"), // FIXED PATH
    forceHardReset: true,
    hardResetMethod: "exit",
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    // Load Vite dev server
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    // Load production build
    win.loadURL(
      url.pathToFileURL(path.join(__dirname, "../dist/index.html")).href
    );
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
