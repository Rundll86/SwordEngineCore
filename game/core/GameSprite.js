const DataGenerator = require("./DataGenerator.js");
const GameObject = require("./GameObject.js");
const ResourceLoader = require("./ResourceLoader.js");
class GameSprite extends GameObject {
    DisplayName = "GameSprite";
    ID = 0;
    Describe = "A common game sprite.";
    ActionPath = {};
    constructor() {
        super();
        ResourceLoader.Init();
    };
    LoadResource() {
        for (let i in this.ActionPath) {
            /**
             * @type {ResourceLoader}
             */
            let Loader = window.ResourceExcel;
            Loader.LoadBitmapToExcel(this.ActionPath[i], i);
        };
    };
};
module.exports = GameSprite;