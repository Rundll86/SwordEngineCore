const GameObject = require("./GameObject.js");
class GameSprite extends GameObject {
    ID = 1;
    DisplayName = "GameSprite";
    Description = "A game sprite.";
};
module.exports = GameSprite;