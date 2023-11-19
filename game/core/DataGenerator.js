const DataGenerator = {
    ActionPath(Name, ResourceType = "png") {
        let Directions = ["Up", "Down", "Left", "Right"];
        let Frames = ["Stand", "Walk1", "Walk2", "Walk3"];
        let Result = {};
        for (let i of Frames) {
            for (let j of Directions) {
                Result[`${i}_${j}`] = `./assets/database/sprite/${Name}/${i}_${j}.${ResourceType}`;
            };
        };
        return Result;
    }
};
module.exports = DataGenerator;