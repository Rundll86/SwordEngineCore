const { app, ipcMain } = require("electron");
class ProcessManager {
    ElectronApp = app;
    ElectronIPC = ipcMain;
    ListenEvent(Name, Callback = () => { }) { this.ElectronApp.on(Name, Callback); };
    ListenIPC(Name, Callback = (_Event, _Data) => { }) { this.ElectronIPC.on(Name, Callback) };
    static Events = {
        WINDOW_ALL_DESTORIED: "window-all-closed",
        READY: "ready"
    };
    Quit() { this.ElectronApp.quit(); };
    Mount(TApp, TIPC) { this.ElectronApp = TApp; this.ElectronIPC = TIPC; };
};
module.exports = ProcessManager;