const DataGenerator = require("./core/DataGenerator.js");
const ExposeToWindow = require("./core/ExposeToWindow.js");
const GameObject = require("./core/GameObject.js");
const GameSprite = require("./core/GameSprite.js");
const ResourceLoader = require("./core/ResourceLoader.js");
const Stage = require("./core/Stage.js");

const SwordEngine = { Stage, ResourceLoader, GameObject, GameSprite, DataGenerator, ExposeToWindow };

module.exports = SwordEngine;