class Position2D {
    X = 0;
    Y = 0;
    constructor(TX = 0, TY = 0) {
        this.X = TX;
        this.Y = TY;
    };
};
class Rect {
    Width = 100;
    Height = 100;
    constructor(TWidth = 100, THeight = 100) {
        this.Width = TWidth;
        this.Height = THeight;
    };
};
class Transform {
    Position = new Position2D;
    Scale = new Rect;
    Angle = 90;
    constructor(TPosition = new Position2D, TScale = new Rect, TAngle = 90) {
        this.Position = TPosition;
        this.Scale = TScale;
        this.Angle = TAngle;
    };
};
module.exports = { Position2D, Rect, Transform };