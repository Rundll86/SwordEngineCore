class Stage {
    DOM = document.createElement("canvas");
    Context = this.DOM.getContext("2d");
    Mount(Query) {
        this.DOM = document.querySelector(Query);
        this.Context = this.DOM.getContext("2d");
    };
    Clear() {
        this.Context.beginPath();
        this.Context.lineWidth = 1;
        this.Context.strokeStyle = "black";
        this.Context.fillStyle = "black";
        this.Context.fillRect(0, 0, this.DOM.width, this.DOM.height);
        this.Context.closePath();
    };
    ReloadSize() {
        this.DOM.width = this.DOM.clientWidth;
        this.DOM.height = this.DOM.clientHeight;
    };
};
module.exports = Stage;