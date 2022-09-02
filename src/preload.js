const {contextBridge,remote} = require("electron");
const BrowserWindow = remote.BrowserWindow;
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        sendData: (data) => {
            var options = {
                silent: false,
                printBackground: true,
                margin: {
                    marginType: 'printableArea'
                },
                landscape: false,

            }
            let win = new BrowserWindow({
                show: false,
                webPreferences: {
                    nodeIntegration: true
                }
            });
            win.loadURL(data);
            win.webContents.on('did-finish-load', () => {
                win.webContents.print(options, (success, failureReason) => {
                    if (!success) console.log(failureReason);
                    console.log('Print Initiated');
                });
            });

        },
    }
);
