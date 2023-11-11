const electron = require("electron");

let mainWindow;

electron.app.on("ready", createWindow);

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("./index.html");
}

module;
