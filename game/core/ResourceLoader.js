class ResourceLoader {
    Excel = {};
    SetAsMain() { window.ResourceExcel = this; };
    LoadBitmap(Path, Callback = (_Data) => { }) {
        let BitmapLoader = document.createElement("img");
        BitmapLoader.src = Path;
        BitmapLoader.addEventListener("load", () => (createImageBitmap(BitmapLoader).then(Callback)));
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