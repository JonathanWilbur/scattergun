"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileInputPlugin = /** @class */ (function () {
    function FileInputPlugin() {
    }
    FileInputPlugin.prototype.read = function (uri) {
        console.log("Reading " + uri);
    };
    return FileInputPlugin;
}());
exports.FileInputPlugin = FileInputPlugin;
exports.plugin = new FileInputPlugin();
