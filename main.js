const electron = require('electron');
const path = require('path');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindown = null;

app.on('ready',()=>{
    //创建BrowserWindow的实例，赋值给win打开窗口

    //软件默认打开的宽度高度
    mainWindown = new BrowserWindow({width:800,height:800})

    //mainWindown.loadFile('index.html'); /*加载html到窗口 */
    mainWindown.loadURL(path.join('file:',__dirname,'index.html'));

    //默认开启渲染进程的调试窗口
    mainWindown.webContents.openDevTools();

    mainWindown.on('closed',()=>{
        mainWindown = null;
    })
})