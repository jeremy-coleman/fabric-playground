require('dotenv').config()
import { app, BrowserWindow, Menu } from "electron";
import * as path from 'path';
import * as url from 'url';


app.disableDomainBlockingFor3DAPIs();

const args = process.argv.slice(1);
let dev = args.some(arg => arg === '--dev');


var DESKTOP_ICON_URL = 'static/resources/icon.ico';

const DEV_URL = 'http://localhost:8080';
const PROD_URL = url.format({protocol: 'file',slashes: true, pathname: path.resolve('dist/client/index.html')});
const CLIENT_URL = dev ? DEV_URL : PROD_URL;

let mainWindow: BrowserWindow;


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 640,
        icon: DESKTOP_ICON_URL,
        webPreferences: {   
            webSecurity: false,
            backgroundThrottling: false,
            experimentalFeatures: true,
            experimentalCanvasFeatures: true,
            //nodeIntegrationInWorker: true,
            plugins: true
        }
    });



    mainWindow.loadURL(CLIENT_URL);


    mainWindow.on("close", () => {
        mainWindow = null;
    });


    const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS, MOBX_DEVTOOLS } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS);
    installExtension(MOBX_DEVTOOLS);
    installExtension(REDUX_DEVTOOLS);


    mainWindow.webContents.on("context-menu", (e: any, props: any) => {
      const { x, y } = props;
      Menu.buildFromTemplate
        ([{label: "Inspect element",click: () => {mainWindow.webContents.inspectElement(x, y)}}])
        .popup(mainWindow as any);
    });


    return mainWindow
}

app.on("ready", async () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
