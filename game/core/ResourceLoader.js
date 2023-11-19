class ResourceLoader {
    Excel = {};
    SetAsMain() { window.ResourceExcel = this; };
    LoadBitmap(Path, Callback = (_Data) => { }) {
        let BitmapLoader = document.createElement("img");
        BitmapLoader.addEventListener("load", () => (createImageBitmap(BitmapLoader).then(Callback)));
        BitmapLoader.addEventListener("error", () => this.LoadBitmap("./assets/common/no_texture.png", (Data) => {
            Callback(Data);
        }));
        BitmapLoader.src = Path;
    };
    LoadBitmapToExcel(Path, Name, Callback = (_Data) => { }) {
        this.LoadBitmap(Path, (Data) => {
            this.Excel[Name] = Data;
            Callback(Data);
        });
    };
    static Init() {
        if (!window.ResourceExcel) {
            let Excel = new ResourceLoader;
            Excel.SetAsMain();
        };
    };
};
module.exports = ResourceLoader;