// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

/**
 * 创建window
 */
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //loadFile是3.x以上用法
  // and load the index.html of the app.
  //mainWindow.loadURL('https://douban.fm');
  const path = require('path')
  mainWindow.loadFile(path.join(__dirname, 'index.html'))
  mainWindow.reload()

  //loadURL是1.x和2.x的用法
  // const url = require('url')
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))


  // Open the DevTools.打开开发者模式
  //mainWindow.webContents.openDevTools()

  //window被关闭时，走下面的方法
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

//app刚启动时，走下面的方法
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// app.on('ready',()=>{
//   console.log('。。日了狗了。。')
//   require('./renderer.js')
//       const home = require('./home.js')
//       home.homeRequest();
// })

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
