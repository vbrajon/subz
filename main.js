const { app, BrowserWindow } = require('electron')
const path = require('path')
let win

function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 200, transparent: true, frame: false, titleBarStyle: 'customButtonsOnHover' })
  win.loadFile('index.html')
  win.on('closed', function() {
    win = null
  })

  // win.webContents.openDevTools()
  win.setAlwaysOnTop(true, 'floating')
  win.setVisibleOnAllWorkspaces(true)
  win.setFullScreenable(false)
}
app.on('ready', createWindow)
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function() {
  if (win === null) createWindow()
})
