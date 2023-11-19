const GameObject = require("./GameObject.js");
const ResourceLoader = require("./ResourceLoader.js");
class GameSprite extends GameObject {
    DisplayName = "GameSprite";
    ID = 0;
    Describe = "A common game sprite.";
    ActionPath = {}
    constructor() {
        super();
        ResourceLoader.Init();
    };
};
module.exports = GameSprite;