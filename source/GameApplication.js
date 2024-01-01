const { app, ipcMain } = require("electron");
const { readFileSync, writeFileSync } = require("fs");
class GameApplication {
    ElectronApp = app;
    ElectronIPC = ipcMain;
    ListenEvent(Name, Callback = () => { }) { this.ElectronApp.on(Name, Callback); };
    static Events = {
        READY_TO_EXIT: "window-all-closed",
        START: "ready"
    };
    Exit() { this.ElectronApp.quit(); };
    Mount(TApp, TIPC) { this.ElectronApp = TApp; this.ElectronIPC = TIPC; };
    Init() {
        this.ListenEvent(GameApplication.Events.START, () => this.Start());
        this.ListenEvent(GameApplication.Events.READY_TO_EXIT, () => this.Exit());
        this.ElectronIPC.handle("File", (_, Data) => {
            if (Data.Type === "Read") {
                return readFileSync(Data.Path, { encoding: Data.Encoding });
            }
            else if (Data.Type === "Write") {
                writeFileSync(Data.Path, Data.Data, { encoding: Data.Encoding });
            };
        });
    };
    Start() { };
};
module.exports = GameApplication;