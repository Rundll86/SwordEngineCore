const { BrowserWindow, Menu } = require("electron");
const { Rect } = require("./DataStruct.js");
const SomeTool = require("./SomeTool.js");
class GameWindow {
    Title = "";
    Root = new BrowserWindow;
    Size = new Rect(640, 480);
    Favicon = "";
    Container = "";
    DevTool = false;
    constructor(TTitle = "Sword Game") {
        this.Title = TTitle;
        this.Update();
    };
    Update() {
        this.Root.setTitle(this.Title);
        this.Root.setSize(this.Size.Width, this.Size.Height);
        if (SomeTool.PathExists(this.Favicon)) { this.Root.setIcon(this.Favicon) };
        if (SomeTool.PathExists(this.Container)) { this.Root.loadFile(this.Container) };
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