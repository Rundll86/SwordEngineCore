const { contextBridge, ipcRenderer } = require("electron");
async function readFile(path, encoding = "utf8") {
    let data = (await ipcRenderer.invoke("File", { Type: "Read", Data: "", Encoding: encoding, "Path": path }));
    try {
        return JSON.parse(data);
    }
    catch {
        return data;
    };
};
contextBridge.exposeInMainWorld("fileGetter", { readFile });