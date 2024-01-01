const { app } = require("electron");
if (!app) {
    throw new Error(
        "Application must be run using SwordEngine Runtime."
    );
};
const GameWindow = require("./source/GameWindow.js");
const GameApplication = require("./source/GameApplication.js");
const DataStruct = require("./source/DataStruct.js");
const GameObject = require("./source/GameObject/GameObject.js");
const GameSprite = require("./source/GameObject/GameSprite.js");
GameObject.Implementions = { GameSprite };
const SwordEngine = { GameWindow, GameApplication, DataStruct };
module.exports = SwordEngine;