import {BrowserWindow,  app} from "electron";
import isDev from "electron-is-dev";

function createMainWindow(){
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadURL(isDev ? "http://localhost:8080/" : `file://${app.getAppPath()}/dist/frontend/index.html`);
}

app.on("ready", createMainWindow);