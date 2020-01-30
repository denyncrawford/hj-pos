const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
  let win = null;
  let loading = new BrowserWindow({
    show: false,
    transparent: true,
    height: 200,
    width: 400,
    frame: false,
    icon: path.resolve('./media/logo.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });
  loading.once("show", function() {
    win = new BrowserWindow({
      width: 1200,
      height:650,
      show: false,
      frame: false,
      icon: path.resolve('./media/logo.png'),
      webPreferences: {
        nodeIntegration: true
      }
    });

    win.webContents.once('dom-ready', function() {
      setTimeout(function() {
        win.show();
        loading.hide();
        loading.close();
      },3000)
    });
    win.loadFile(path.resolve('./views/main/index.html'));
  });

  loading.loadFile(path.resolve('./views/splash/loading.html'));
  loading.show();
}

app.on('ready', function() {
  setTimeout(function() {
    createWindow();
  },500)
});
