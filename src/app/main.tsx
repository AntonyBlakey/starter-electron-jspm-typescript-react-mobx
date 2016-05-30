import { app, BrowserWindow } from 'electron';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow(dirname) {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  win.loadURL(`file://${dirname}/../renderer/index.html`);

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// Hot Reloading Support

import HotReloader from "systemjs-hot-reloader";
export let hotReloader 

export function __reload(m) {
    console.log("Main Process Reloaded");
    hotReloader = m.hotReloader
    win = m.win;
}

export function initialize(dirname, socket) {
    if (app.isReady()) {
        createWindow(dirname);
    } else {
        app.on('ready', () => { createWindow(diname) });
    }

    hotReloader = new HotReloader(socket);
}
