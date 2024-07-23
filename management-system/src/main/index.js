import { app, BrowserWindow, screen } from 'electron';
import { join } from 'path';
import path from 'path';

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width,
    height,
    show: false,
    autoHideMenuBar: true,
    icon: join(__dirname, '../../build/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    //Somente para abrir devtool
    mainWindow.webContents.openDevTools()
  });

  if (process.env.NODE_ENV === 'development' && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    const file = mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
    // Mostrar caminho que abriu arquivo
    console.log(`File: ${file}`)
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});