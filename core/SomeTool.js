const fs = require("fs");
const SomeTool = {
    PathExists(Path) { try { fs.accessSync(Path, fs.constants.F_OK); return true; } catch { return false; }; }
};
module.exports = SomeTool;