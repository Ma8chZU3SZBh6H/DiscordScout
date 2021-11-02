import {BrowserWindow,  app} from "electron";

function createMainWindow(){
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadURL("http://localhost:8080/");
}

app.on("ready", createMainWindow);