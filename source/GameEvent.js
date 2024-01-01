const { webContents, ipcMain } = require("electron");
class GameEvent {
    ElectronSender = null;
    ElectronIpc = ipcMain;
    Send(Name, Value) {
        this.ElectronSender.send(Name, Value);
    };
    Listen(Name, Callback = (Data) => { }) {
        this.ElectronIpc.on(Name, (_Event, Data) => { Callback(Data); })
    };
    Mount(Window) {
        this.ElectronSender = Window.Root.webContents;
    };
    constructor(Window){this.Mount(Window);};
};
module.exports = GameEvent;