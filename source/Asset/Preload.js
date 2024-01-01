const { contextBridge, ipcRenderer } = require("electron");
class GameEvent {
    ElectronIpc = ipcRenderer;
    Send(Name, Value) {
        this.ElectronIpc.send(Name, Value);
    };
    Listen(Name, Callback = (Data) => { }) {
        this.ElectronIpc.on(Name, (_Event, Data) => { Callback(Data); })
    };
};
contextBridge.exposeInMainWorld("GameEvent", GameEvent);