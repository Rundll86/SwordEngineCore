const { BrowserWindow, Menu } = require("electron");
const { Rect } = require("./DataStruct.js");
const path = require("path");
const fs = require("fs");
function PathExists(Path) {
    try {
        fs.accessSync(Path, fs.constants.F_OK);
        return true;
    }
    catch {
        return false;
    };
};
class GameWindow {
    Title = "";
    Root = new BrowserWindow;
    Size = new Rect(640, 480);
    Favicon = path.join(__dirname, "Asset/Favicon.ico");
    DevTool = false;
    constructor(TTitle = "Sword Game") {
        this.Title = TTitle;
        this.Root.loadFile(path.join(__dirname, "Asset/Stage.html"));
        this.Update();
    };
    Update() {
        this.Root.setTitle(this.Title);
        this.Root.setSize(this.Size.Width, this.Size.Height);
        if (PathExists(this.Favicon)) { this.Root.setIcon(this.Favicon) }
        else {
            throw (
                new Error("Path not exists.")
            );
        };
        if (this.DevTool) {
            this.Root.webContents.openDevTools();
        }
        else {
            this.Root.webContents.closeDevTools();
        };
        Menu.setApplicationMenu(null);
    };
    Destory() {
        this.Root.close();
    };
};
module.exports = GameWindow;