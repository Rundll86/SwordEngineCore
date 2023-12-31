const { app } = require("electron");
if (!app) {
    throw new Error(
        "Application must be run using SwordEngine-ERL."
    );
};
const GameWindow = require("./source/GameWindow.js");
const GameApplication = require("./source/GameApplication.js");
const DataStruct = require("./source/DataStruct.js");
const SwordEngine = { GameWindow, GameApplication, DataStruct };
module.exports = SwordEngine;