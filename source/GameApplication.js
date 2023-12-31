const { app, ipcMain } = require("electron");
class GameApplication {
    ElectronApp = app;
    ElectronIPC = ipcMain;
    ListenEvent(Name, Callback = () => { }) { this.ElectronApp.on(Name, Callback); };
    ListenIPC(Name, Callback = (_Event, _Data) => { }) { this.ElectronIPC.on(Name, Callback) };
    static Events = {
        READY_TO_EXIT: "window-all-closed",
        START: "ready"
    };
    Exit() { this.ElectronApp.quit(); };
    Mount(TApp, TIPC) { this.ElectronApp = TApp; this.ElectronIPC = TIPC; };
    Init() { this.ListenEvent(GameApplication.Events.START, () => this.Start()); };
    Start() { };
};
module.exports = GameApplication;