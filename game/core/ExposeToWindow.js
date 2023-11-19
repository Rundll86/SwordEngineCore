module.exports = function ExposeToWindow(Data, Name = null) {
    if (!Name) { return; };
    window[Name] = Data;
    return Data;
};