import { BrowserWindow, app, ipcMain } from "electron";
import * as isDev from "electron-is-dev";
import { LoginHandlerResponse, PurpleUser, User, UserState } from "../types";
import installExtension, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import getUser from "./getUser";
import fs from "fs";
import reqUser from "./api/reqUser";

async function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  if (isDev) {
    window.webContents.once("dom-ready", async () => {
      await installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err))
        .finally(() => {
          window.webContents.openDevTools();
        });
    });
    window.loadURL("http://localhost:8080/");
  } else {
    window.loadURL(`file://${app.getAppPath()}/dist/frontend/index.html`);
  }

  ipcMain.handle("test", (event, arg) => {
    console.log(arg);
    window.webContents.send("hello", "uga?");
  });

  // ipcMain.handle("reqUser", async (event, arg: ReqUser) => {
  //   const user = await reqUser(arg.id, arg.token);
  //   console.log("HUH???");
  //   window.webContents.emit("resUser", user);
  // });

  ipcMain.handle("login", async (event, arg: UserState) => {
    //console.log(arg);
    const loginHandlerResponse: LoginHandlerResponse = {
      success: false,
      msg: null,
      user: null,
    };
    try {
      //const user: User = await getUser(arg.token);
      const user = JSON.parse(fs.readFileSync("user.json").toString());
      loginHandlerResponse.user = user;
      loginHandlerResponse.success = true;
    } catch (error) {
      console.log("LOGIN FAILED", error);
      loginHandlerResponse.msg = error;
    }
    //console.log(loginHandlerResponse);
    window.webContents.send("login", loginHandlerResponse);
  });
}

app.on("ready", createMainWindow);
